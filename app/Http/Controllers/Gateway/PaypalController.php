<?php

namespace App\Http\Controllers\Gateway;

use App\Http\Controllers\Controller;
use App\Mail\PaymentSuccessMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Srmklive\PayPal\Services\PayPal as PayPalClient;
use App\Models\Order;
use Illuminate\Support\Facades\Log;

class PaypalController extends Controller
{
    public function payment(Request $request)
    {
        $totalAmount = $request->input('total');
        $orderId = $request->input('order_id');

        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $paypalToken = $provider->getAccessToken();

        $response = $provider->createOrder([
            "intent" => "CAPTURE",
            "application_context" => [
                "return_url" => route('paypal.success', ['order_id' => $orderId]),
                "cancel_url" => route('paypal.cancel', ['order_id' => $orderId]),
            ],
            "purchase_units" => [
                [
                    "amount" => [
                        "currency_code" => "USD",
                        "value" => $totalAmount
                    ]
                ]
            ]
        ]);
        if (isset($response['id']) && $response['status'] == 'CREATED') {
            foreach ($response['links'] as $link) {
                if ($link['rel'] == 'approve') {
                    return Inertia::location($link['href']);
                }
            }
        } else {
            return redirect()->route('/')->with('error', 'Payment failed.');
        }
    }


    public function success(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();

        $token = $request->query('token');
        $orderId = $request->query('order_id');

        Log::info("PayPal Token: $token");
        Log::info("Order ID: $orderId");

        $response = $provider->capturePaymentOrder($token);

        Log::info('PayPal Capture Response:', $response);

        if (isset($response['status']) && $response['status'] == 'COMPLETED') {
            $capture = $response['purchase_units'][0]['payments']['captures'][0];
            $transactionId = $capture['id'];
            $amount = $capture['amount']['value'];

            // Find the order by ID and update it with the transaction ID and status
            $order = Order::find($orderId);
            if ($order) {
                $order->transaction_id = $transactionId;
                $order->status = 'completed';
                $order->save();
                Log::info("Order updated: ", $order->toArray());

                // Send the payment success email to the customer
                Mail::to($order->customer->email)->send(new PaymentSuccessMail($order, $transactionId, $amount));

                Log::info("Order updated and email sent: ", $order->toArray());
            } else {
                Log::error("Order not found with ID: $orderId");
            }

            // return redirect()->route('paypal.receipt', ['transactionId' => $transactionId]);
            return Inertia::render('ReceiptPage', [
                'transactionId' => $transactionId,
                'amount' => $amount,
                'order' => $order
            ]);
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

    public function getReceipt($transactionId)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();

        $response = $provider->showCapturedPaymentDetails($transactionId);

        Log::info('PayPal Order Details Response:', $response);

        if (isset($response['id']) && $response['status'] == 'COMPLETED') {
            return Inertia::render('ReceiptPage', [
                'transaction' => $response
            ]);
        }

        return redirect()->route('/')->with('error', 'Transaction not found or not completed.');
    }
}
