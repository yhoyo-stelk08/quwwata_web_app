<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Gateway\PaypalController;
use App\Http\Requests\StoreCustomerRequest;
use App\Models\Customer;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function cart(Request $request)
    {
        return inertia('CartPage');
    }

    public function checkout(Request $request)
    {
        $orderItems = $request->input('orderItems');
        return inertia('CheckoutPage', [
            'orderItems' => $orderItems,
        ]);
    }

    public function order(StoreCustomerRequest $request)
    {
        $validated_data = $request->validated();

        $orderItems = $validated_data['orderItems'];
        unset($validated_data['orderItems']);

        $remark = $validated_data['remark'];
        unset($validated_data['remark']);

        $payment_method = $validated_data['payment_method'];
        unset($validated_data['payment_method']);

        // create or find customer
        $customer = Customer::firstOrCreate(['email' => $validated_data['email']], $validated_data);

        $order = new Order([
            'customer_id' => $customer->id,
            'status' => 'pending',
            'order_notes' => $remark,
            'payment_method' => $payment_method,
        ]);
        $order->save();

        // handle order items
        foreach ($orderItems as $orderItem) {
            OrderItem::create([
                'order_id' => $order->id,
                'product_id' => $orderItem['product_id'],
                'quantity' => $orderItem['quantity'],
                'sub_total' => $orderItem['quantity'] * $orderItem['price'],
                'discount' => 0,
                'total' => $orderItem['itemTotal'],
                'draw_weight' => $orderItem['draw_weight'],
                'arrow_pass' => $orderItem['arrow_pass'],
            ]);
        }

        return $this->redirectToPaymentGateway($payment_method, $order);
    }

    private function redirectToPaymentGateway($payment_method, $order)
    {
        $totalAmount = $order->orderItems->sum('total');

        if ($payment_method == 'stripe') {
            return redirect()->route('stripe.payment', ['total' => $totalAmount, 'order_id' => $order->id]);
        } else if ($payment_method == 'paypal') {
            return app(PaypalController::class)->payment(new Request(['total' => $totalAmount, 'order_id' => $order->id]));
        }
    }
}
