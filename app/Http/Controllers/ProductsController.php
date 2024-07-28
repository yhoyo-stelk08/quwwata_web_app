<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use App\Http\Resources\ProductResource;
use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        \Log::debug('Entering Products Index Method');
        $query = Products::with('product_images')->search($request);

        // Add sorting
        if ($request->has('sort_by') && $request->has('sort_direction')) {
            $query->orderBy($request->get('sort_by'), $request->get('sort_direction'));
        } else {
            // Default sorting
            $query->orderByDesc('updated_at');
        }

        $products = $query->paginate(10);

        $products_data = ProductResource::collection($products);

        // Log the products data
        \Log::info('Products Data', ['Products Data' => $products]);

        return inertia('Products/Index', [
            'productsData' => $products_data,
            'search' => $request->search ?? "",
            'sort_by' => $request->sort_by ?? "",
            'sort_direction' => $request->sort_direction ?? "",
        ]);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $products)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductsRequest $request, Products $products)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $products)
    {
        //
    }
}
