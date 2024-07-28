<?php

use App\Http\Controllers\api\GalleryApiController;
use App\Http\Controllers\api\ProductApiController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// route to HomePage
Route::get('/', function () {
    return Inertia::render('HomePage');
})->name('/');

// route to ProductPage
Route::get('/products', function () {
    return Inertia::render('ProductsPage');
})->name('products');

// route to ProductDetailsPage
Route::get('/product-details/{category}', function ($category) {
    return Inertia::render('ProductDetailsPage', [
        'category' => $category,
    ]);
})->name('product-details');

// route to GalleryPage
Route::get('gallery', function () {
    return Inertia::render('GalleryPage');
})->name('gallery');


// route to ContactPage
Route::get('contact', function () {
    return Inertia::render('ContactPage');
})->name('contact');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// API route
Route::get('all-gallery-data', [GalleryApiController::class, 'allGalleryData'])->name('all-gallery-data');
Route::get('all-products', [ProductApiController::class, 'allProductData'])->name('all-products');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Route for managing gallery
    Route::resource('galleries', GalleryController::class);

    // Route for managing products
    Route::resource('manage-products', ProductsController::class);
});

require __DIR__ . '/auth.php';
