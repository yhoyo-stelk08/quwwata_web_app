<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductApiController extends Controller
{
    public function allProductData()
    {
        $products = Products::all();
        return response()->json($products);
    }
}
