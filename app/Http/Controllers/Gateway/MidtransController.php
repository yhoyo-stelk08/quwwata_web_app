<?php

namespace App\Http\Controllers\Gateway;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Midtrans\Config;
use Midtrans\Snap;
use App\Models\Order;
use Inertia\Inertia;

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

        if (!$order) {
            // Todo create page order not found
            return redirect()->route('/')->with('error', 'Order not found.');
        }


        // Prepare the transaction details
        $params = [
            'transaction_details' => [
                'order_id' => $order->id,
                'gross_amount' => $order->orderItems->sum('total'),
            ],
            'customer_details' => [
                'first_name' => $order->customer->first_name,
                'last_name' => $order->customer->last_name,
                'email' => $order->customer->email,
                'phone' => $order->customer->phone_number,
            ],
            'item_details' => $order->orderItems->map(function ($item) {
                return [
                    'id' => $item->id,
                    'price' => $item->total,
                    'quantity' => $item->quantity,
                    'name' => $item->product->name,
                ];
            })->toArray(),
        ];

        // Create Snap transaction
        $snapToken = Snap::getSnapToken($params);

        // dd($snapToken);

        // Render the Midtrans Snap payment page
        // return Inertia::render('MidtransPaymentPage', ['snapToken' => $snapToken]);

        // Redirect to Midtrans payment page
        $paymentUrl = "https://app.sandbox.midtrans.com/snap/v2/vtweb/{$snapToken}";

        return Inertia::location($paymentUrl);
    }

    public function success(Request $request)
    {
        // Retrieve the session ID from the request
        $orderId = $request->input('order_id');

        // Find the order by ID and update it with the transaction ID and status
        $order = Order::find($orderId);
        if ($order) {
            $order->status = 'completed';
            $order->transaction_id = $request->input('transaction_id');
            $order->save();

            // Redirect to the receipt page or display a success message
            return redirect()->route('receipt', ['order_id' => $orderId]);
        }

        return redirect()->route('checkout')->with('error', 'Payment failed.');
    }

    public function cancel(Request $request)
    {
        $orderId = $request->query('order_id');
        $order = Order::find($orderId);

        if ($order) {
            $order->status = 'declined';
            $order->save();
        }

        return redirect()->route('checkout')->with('error', 'Payment was cancelled.');
    }
}
