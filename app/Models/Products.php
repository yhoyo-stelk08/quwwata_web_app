<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Products extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $guarded = [];

    public function product_images(): HasMany
    {
        return $this->hasMany(ProductImage::class);
    }

    public function scopeSearch($query, $search)
    {
        return $query->where('name', 'like', '%' . $search . '%')
            ->orWhere('short_description', 'like', '%' . $search . '%')
            ->orWhere('long_description', 'like', '%' . $search . '%');
    }
}
