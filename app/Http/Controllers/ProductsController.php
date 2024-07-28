<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductsRequest;
use App\Http\Requests\UpdateProductsRequest;
use App\Http\Resources\ProductResource;
use App\Models\ProductImage;
use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        return inertia('Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductsRequest $request)
    {
        // Ensure the directory exists
        if (!Storage::exists('public/images/product_images')) {
            Storage::makeDirectory('public/images/product_images');
        }

        // Validate request data
        $validated_data = $request->validated();

        // Create the product
        $product = Products::create($validated_data);

        // Handle product images
        if ($request->hasFile('product_images')) {
            foreach ($request->file('product_images') as $file) {
                // Generate a unique name for each image file
                $imageName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();

                // Store the file with the unique name
                $path = $file->storeAs('public/images/product_images', $imageName);

                // Create a new product image record
                ProductImage::create([
                    'image_name' => $imageName,
                    'path' => 'images/product_images/' . $imageName, // Adjusting path to be relative
                    'product_id' => $product->id,
                ]);
            }
        }

        return redirect()->route('manage-products.index')->with('message', 'Product added successfully.');
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
