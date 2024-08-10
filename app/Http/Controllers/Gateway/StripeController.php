<?php

namespace App\Http\Controllers\Gateway;

use App\Http\Controllers\Controller;
use App\Mail\PaymentSuccessMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use App\Models\Order;
use Illuminate\Support\Facades\Log;
use Stripe\Stripe;
use Stripe\Checkout\Session as StripeSession;

class StripeController extends Controller
{
    public function payment(Request $request)
    {
        // Get the total and order_id from the request
        $amount = $request->input('total'); // Amount should be in cents (e.g., $10.00 = 1000 cents)
        $orderId = $request->input('order_id');

        // Set your Stripe secret key
        Stripe::setApiKey(config('stripe.secret_key'));

        // Fetch the order from the database
        $order = Order::with('orderItems')->find($orderId);

        if (!$order) {
            // to do create page order not found
            return redirect()->route('/')->with('error', 'Order not found.');
        }

        // dd($order);

        // Create line items for each product in the order
        $lineItems = [];
        foreach ($order->orderItems as $item) {
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $item->product->name, // Assuming you have a product relationship
                    ],
                    'unit_amount' => ($item->total / $item->quantity) * 100, // Amount in cents
                ],
                'quantity' => $item->quantity,
            ];
        }

        // dd($lineItems);

        // Create a Checkout Session
        $session = StripeSession::create([
            'payment_method_types' => ['card'],
            'line_items' => $lineItems,
            'mode' => 'payment',
            'success_url' => route('stripe.success', ['order_id' => $orderId]),
            'cancel_url' => route('stripe.cancel', ['order_id' => $orderId]),
            'metadata' => [
                'order_id' => $orderId,
            ],
        ]);

        // Save the session ID to the session so we can retrieve it later
        session(['stripe_session_id' => $session->id]);

        // Redirect the user to Stripe's hosted Checkout page
        return Inertia::location($session->url);
    }

    public function success(Request $request)
    {
        $orderId = $request->query('order_id');

        // Retrieve the session ID from the session storage
        $sessionId = session('stripe_session_id');

        // Set your Stripe secret key
        Stripe::setApiKey(config('stripe.secret_key'));

        // Retrieve the session from Stripe
        $session = StripeSession::retrieve($sessionId);
        // dd($session);

        if ($session->payment_status === 'paid') {
            $transactionId = $session->payment_intent;
            $amount = $session->amount_total / 100; // Convert to dollars

            // Find the order by ID and update it with the transaction ID and status
            $order = Order::find($orderId);
            if ($order) {
                $order->transaction_id = $transactionId;
                $order->status = 'completed';
                $order->save();

                // Send the payment success email to the customer
                Mail::to($order->customer->email)->send(new PaymentSuccessMail($order, $transactionId, $amount));

                // Redirect to the receipt page
                return Inertia::render('ReceiptPage', [
                    'transactionId' => $transactionId,
                    'amount' => $amount,
                    'order' => $order
                ]);
            } else {
                Log::error("Order not found with ID: $orderId");
            }
        }

        return redirect()->route('/')->with('error', 'Payment failed.');
    }
    public function cancel(Request $request)
    {
        $orderId = $request->query('order_id');
        $order = Order::find($orderId);

        if ($order) {
            $order->status = 'declined';
            $order->save();
        }

        return redirect()->route('/')->with('error', 'Payment was cancelled.');
    }
}
