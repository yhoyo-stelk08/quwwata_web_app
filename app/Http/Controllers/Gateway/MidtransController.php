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
    public function payment(Request $request)
    {
        // Set  Midtrans configuration
        Config::$serverKey = config('midtrans.server_key');
        Config::$isProduction = config('midtrans.is_production');
        Config::$isSanitized = config('midtrans.is_sanitized');
        Config::$is3ds = config('midtrans.is_3ds');


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
                    'price' => $item->price,
                    'quantity' => $item->quantity,
                    'name' => $item->product->name,
                ];
            })->toArray(),
        ];

        // Create Snap transaction
        $snapToken = Snap::getSnapToken($params);

        // Render the Midtrans Snap payment page
        return Inertia::render('MidtransPaymentPage', ['snapToken' => $snapToken]);
    }
}
