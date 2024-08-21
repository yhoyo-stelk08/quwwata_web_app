<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'image_name', 'category'];

    public function scopeSearch(Builder $query, $search = null)
    {
        return $query->where('title', 'like', '%' . $search . '%')
            ->orWhere('image_name', 'like', '%' . $search . '%')
            ->orWhere('category', 'like', '%' . $search . '%');
    }
}
