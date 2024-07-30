<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductApiController extends Controller
{
    public function allProductData()
    {
        $products = Products::with('product_images')->get();
        return response()->json($products);
    }

    public function ProductPerCategory(string $category): object
    {
        $products = Products::with('product_images')->where('category', $category)->get();
        return response()->json($products);
    }

    public function ProductDetails(string $id): object
    {
        $product = Products::with('product_images')->where('id', $id)->first();
        return response()->json($product);
    }
}
