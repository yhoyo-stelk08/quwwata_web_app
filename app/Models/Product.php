<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $guarded = [];

    public function product_images(): HasMany
    {
        return $this->hasMany(ProductImage::class, 'product_id', 'id');
    }

    public function orderItems(): HasMany
    {
        return $this->hasMany(OrderItem::class);
    }

    public function product_reviews(): HasMany
    {
        return $this->hasMany(ProductReview::class, 'product_id', 'id');
    }

    public function scopeSearch(Builder $query, $search): Builder
    {
        if ($search) {
            return $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('short_description', 'like', '%' . $search . '%')
                ->orWhere('long_description', 'like', '%' . $search . '%');
        }

        return $query;
    }
}
