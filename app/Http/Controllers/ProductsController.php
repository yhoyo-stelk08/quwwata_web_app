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

        // Eager load product_images and apply search and sorting
        $query = Products::with('product_images');

        // Add sorting
        if ($request->has('sort_by') && $request->has('sort_direction')) {
            $query->orderBy($request->get('sort_by'), $request->get('sort_direction'));
        } else {
            // Default sorting
            $query->orderByDesc('updated_at');
        }

        // Paginate the results
        $products = $query->paginate(10);
        \Log::debug('Products Query Result', $products->toArray());

        // Transform the products data using ProductResource
        $products_data = ProductResource::collection($products);
        \Log::debug('Transformed Products Data', $products_data->toArray($request));

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
        \Log::debug('Store method called');

        // Ensure the directory exists
        if (!Storage::exists('public/images/product_images')) {
            Storage::makeDirectory('public/images/product_images');
        }

        // Validate request data
        $validated_data = $request->validated();
        \Log::debug('Validated data', $validated_data);

        // Remove product_images from validated data as it's not a column in the products table
        unset($validated_data['product_images']);

        // Create the product
        $product = Products::create($validated_data);
        \Log::debug('Product created', $product->toArray());

        // Handle product images
        if ($request->hasFile('product_images')) {
            foreach ($request->file('product_images') as $file) {
                \Log::debug('Processing file', ['file' => $file->getClientOriginalName()]);

                // Generate a unique name for each image file
                $imageName = time() . '_' . uniqid() . '.' . $file->getClientOriginalExtension();
                \Log::debug('Generated image name', ['imageName' => $imageName]);

                // Store the file with the unique name
                $path = $file->storeAs('public/images/product_images', $imageName);
                \Log::debug('File stored at path', ['path' => $path]);

                // Create a new product image record
                $productImage = ProductImage::create([
                    'image_name' => $imageName,
                    'path' => 'images/product_images/' . $imageName, // Adjusting path to be relative
                    'product_id' => $product->id,
                ]);
                \Log::debug('Product image created', $productImage->toArray());
            }
        }

        return redirect()->route('manage-products.index')
            ->with('message', ['type' => 'success', 'body' => 'Item Added Successfully']);
    }




    /**
     * Display the specified resource.
     */
    public function show(Products $manage_product)
    {
        $manage_product->load('product_images');
        return inertia('Products/Show', [
            'product' => new ProductResource($manage_product),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $manage_product)
    {
        $manage_product->load('product_images');
        return inertia('Products/Edit', [
            'product_data' => new ProductResource($manage_product),
        ]);
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
    public function destroy(Products $manage_product)
    {
        try {
            \Log::debug('Deleting product with ID:', [$manage_product->id]);

            // Delete the images associated with the product
            foreach ($manage_product->product_images as $image) {
                \Log::debug('Deleting image with path:', [$image->path]);
                Storage::delete('public/' . $image->path);
                $image->delete();
            }

            // Delete the product
            $manage_product->delete();

            \Log::debug('Product deleted successfully.');

            // Redirect with a success message
            return redirect()->route('manage-products.index')
                ->with('message', ['type' => 'success', 'body' => 'Product deleted successfully..!']);
        } catch (\Throwable $th) {
            \Log::error('Error deleting product', ['error' => $th]);
            // Redirect with an error message
            return redirect()->route('manage-products.index')
                ->with('message', ['type' => 'error', 'body' => 'Failed deleting product data']);
        }
    }
}
