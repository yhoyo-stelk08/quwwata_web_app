<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\GalleryApiController;
use App\Http\Controllers\api\ProductApiController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// API route
Route::get('all-gallery-data', [GalleryApiController::class, 'allGalleryData'])->name('all-gallery-data');
Route::get('all-products', [ProductApiController::class, 'allProductData'])->name('all-products');
Route::get('products-categories/{category}', [ProductApiController::class, 'ProductPerCategory'])->name('products-categories');
Route::get('products-details/{id}', [ProductApiController::class, 'ProductDetails'])->name('products-details');
