<?php

namespace App\Http\Controllers;

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

}
