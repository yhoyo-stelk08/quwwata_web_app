<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCustomerRequest;
use App\Models\Customer;
use App\Models\Products;
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

        return inertia('HomePage');

    }

}
