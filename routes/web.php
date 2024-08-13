<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\Gateway\PaypalController;
use App\Http\Controllers\Gateway\StripeController;
use App\Http\Controllers\Gateway\MidtransController;
use App\Http\Controllers\OrderController;
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

// route to ProductPage per Category
Route::get('/products/{category}', function ($category) {
    return Inertia::render('ProductsPage', [
        'category' => $category,
    ]);
})->name('products-category');

// route to ProductDetailsPage
Route::get('/product-details/{category}/{id}', function ($category, $id) {
    // Fetch the product name from the database based on the id
    $product = \App\Models\Product::find($id);
    return Inertia::render('ProductDetailsPage', [
        'id' => $id,
        'category' => $category,
        'name' => $product->name,
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

// route to cookie policy page
Route::get('privacy-policy', function () {
    return Inertia::render('PrivacyPolicyPage');
})->name('privacy-policy');

// route to cart page
Route::post('cart', [CartController::class, 'cart'])->name('cart');

// route to checkout page
Route::post('checkout', [CartController::class, 'checkout'])->name('checkout');
Route::post('checkout/order', [CartController::class, 'order'])->name('checkout.order');

// route to paypal payment gateway
Route::post('paypal/payment', [PaypalController::class, 'payment'])->name('paypal.payment');
Route::get('paypal/success', [PaypalController::class, 'success'])->name('paypal.success');
Route::get('paypal/cancel', [PaypalController::class, 'cancel'])->name('paypal.cancel');
Route::get('paypal/receipt/{transactionId}', [PaypalController::class, 'getReceipt'])->name('paypal.receipt');

// route to stripe payment gateway
Route::post('stripe/payment', [StripeController::class, 'payment'])->name('stripe.payment');
Route::get('stripe/success', [StripeController::class, 'success'])->name('stripe.success');
Route::get('stripe/cancel', [StripeController::class, 'cancel'])->name('stripe.cancel');

// route to midtrans payment gateway
Route::post('midtrans/payment', [MidtransController::class, 'payment'])->name('midtrans.payment');
Route::get('midtrans/success', [MidtransController::class, 'success'])->name('midtrans.success');
Route::get('midtrans/cancel', [MidtransController::class, 'cancel'])->name('midtrans.cancel');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Route for managing gallery
    Route::resource('galleries', GalleryController::class);

    // Route for managing products
    Route::resource('manage-products', ProductsController::class);

    // Route for managing order
    Route::get('orders', [OrderController::class, 'index'])->name('orders.index');
    Route::get('orders/{order}', [OrderController::class, 'show'])->name('orders.show');

    // Route for managing contact
    Route::resource('contacts', ContactController::class)->only(['index', 'store', 'show', 'destroy']);
});

require __DIR__ . '/auth.php';
