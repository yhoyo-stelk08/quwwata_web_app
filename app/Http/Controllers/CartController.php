<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Models\Customer;
use App\Models\Orders;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

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

        $totalAmount = $validated_data['totalAmount'];
        unset($validated_data['totalAmount']);

        $customer = Customer::create($validated_data);

        foreach ($orderItems as $orderItem) {
            $order = new Orders([
                'customer_id' => $customer->id,
                'product_id' => $orderItem['product_id'],
                'quantity' => $orderItem['quantity'],
                'sub_total' => $orderItem['quantity'] * $orderItem['price'],
                'discount' => 0,
                'total' => $orderItem['itemTotal'],
                'status' => 'pending',
                'order_notes' => $remark,
                'draw_weight' => $orderItem['draw_weight'],
                'arrow_pass' => $orderItem['arrow_pass'],
                'payment_method' => $payment_method,
            ]);
            $order->save();
        }

        return redirect()->route('paypal.payment', ['total' => $totalAmount]);
    }
}
