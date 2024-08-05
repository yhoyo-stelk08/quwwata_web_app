<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Models\Customer;
use App\Models\Products;
use App\Models\Orders;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function cart(Request $request)
    {
        // $product = Products::findMany(array_column($orderItems, 'product_id'));
        return inertia('CartPage');
    }

    public function checkout(Request $request)
    {
        $orderItems = $request->input('orderItems');
        // dd($orderItems);
        return inertia('CheckoutPage', [
            'orderItems' => $orderItems,
        ]);
    }

    public function order(StoreCustomerRequest $request)
    {
        // dd($request->all());
        $validated_data = $request->validated();
        // dd($validated_data);

        // Detach orderItems from validated data
        $orderItems = $validated_data['orderItems'];
        unset($validated_data['orderItems']);

        // Detach remark from validated data
        $remark = $validated_data['remark'];
        unset($validated_data['remark']);

        // save customer data
        $customer = Customer::create($validated_data);

        // handle order items
        foreach ($orderItems as $orderItem) {
            $order = new Orders([
                'customer_id' => $customer->id,
                'product_id' => $orderItem['product_id'],
                'quantity' => $orderItem['quantity'],
                'sub_total' => $orderItem['quantity'] * $orderItem['price'], // Assuming price is per item
                'discount' => 0, // Set to 0 or calculate if applicable
                'total' => $orderItem['itemTotal'], // Adjust if discount or other fees are applied
                'status' => 'pending',
                'order_notes' => $remark,
                'draw_weight' => $orderItem['draw_weight'],
                'arrow_pass' => $orderItem['arrow_pass'],
            ]);
            // dd($order);
            $order->save();
        }

        return inertia('HomePage');

    }

}
