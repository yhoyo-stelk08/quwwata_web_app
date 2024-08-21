<?php

namespace App\Providers;

use App\Services\GalleryService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {

        // Bind the GalleryRepository and GalleryEloquent
        $this->app->bind(
            \App\Repositories\GalleryRepository::class,
            \App\Repositories\GalleryEloquent::class,
        );

        // Bind the GalleryService
        $this->app->bind(GalleryService::class, function ($app) {
            return new GalleryService();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
