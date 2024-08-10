<?php

namespace App\Http\Controllers\Gateway;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Midtrans\Config;
use Midtrans\Snap;
use App\Models\Order;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\PaymentSuccessMail;

class MidtransController extends Controller
{
    public function __construct()
    {
        // Set  Midtrans configuration
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = config('midtrans.is_sanitized');
        Config::$is3ds = config('midtrans.is_3ds');
    }

    public function payment(Request $request)
    {
        // Fetch the order from the database
        $order = Order::with('orderItems')->find($request->order_id);

        // get usd to idr convert value
        $convert_value = $request->convert_value;

        if (!$order) {
            // Todo create page order not found
            return redirect()->route('/')->with('error', 'Order not found.');
        }

        // Generate a new unique transaction id by appending a timestamp or a unique identifier
        $transaction_id = $order->id . '-' . uniqid();

        // Prepare the transaction details
        $params = [
            'transaction_details' => [
                'order_id' => $transaction_id,
                'gross_amount' => $order->orderItems->sum('total'),
            ],
            'customer_details' => [
                'first_name' => $order->customer->first_name,
                'last_name' => $order->customer->last_name,
                'email' => $order->customer->email,
                'phone' => $order->customer->phone_number,
            ],
            'item_details' => $order->orderItems->map(function ($item) use ($convert_value) {
                return [
                    'id' => $item->id,
                    'price' => $item->total * $convert_value,
                    'quantity' => $item->quantity,
                    'name' => $item->product->name,
                ];
            })->toArray(),
        ];

        // Create Snap transaction
        $snapToken = Snap::getSnapToken($params);

        // Redirect to Midtrans payment page
        $paymentUrl = "https://app.sandbox.midtrans.com/snap/v2/vtweb/{$snapToken}";

        // save  snap token to order table  as transaction id
        $order->transaction_id = $transaction_id;
        $order->save();

        return Inertia::location($paymentUrl);
    }

    public function success(Request $request)
    {
        // Retrieve the session ID from the request
        $orderId = $request->input('order_id');

        // Find the order by ID and update it with the transaction ID and status
        $order = Order::where('transaction_id', $orderId)->first();
        if ($order) {
            $order->status = 'completed';
            $order->save();

            $transactionId = $order->transaction_id;
            $amount = $order->getTotalAttribute();

            // Send the payment success email to the customer
            Mail::to($order->customer->email)->send(new PaymentSuccessMail($order, $transactionId, $amount));

            return Inertia::render('ReceiptPage', [
                'transactionId' => $transactionId,
                'amount' => $amount,
                'order' => $order
            ]);
        }

        return Inertia::location('checkout')->with('error', 'Payment failed.');
    }

    public function cancel(Request $request)
    {
        $transaction_id = $request->query('order_id');
        $order = Order::where('transaction_id', $transaction_id)->first();

        if ($order) {
            $order->status = 'declined';
            $order->save();
        }

        return Inertia::location('checkout')->with('error', 'Payment failed.');
    }
}
