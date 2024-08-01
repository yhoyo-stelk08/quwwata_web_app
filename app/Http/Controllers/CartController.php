<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        return inertia('CheckoutPage');
    }

    public function checkout($product_id)
    {
        $product = Products::findOrFail($product_id);
        return inertia('CheckoutPage', [
            'product' => $product,
        ]);
    }
}
