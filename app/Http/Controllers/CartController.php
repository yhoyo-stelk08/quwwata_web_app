<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function cart(Request $request)
    {
        $orderItems = $request->input('order_item');
        // dd($orderItems);
        $product = Products::findMany(array_column($orderItems, 'product_id'));
        return inertia('CartPage', [
            'orderItems' => $orderItems,
        ]);
    }
}
