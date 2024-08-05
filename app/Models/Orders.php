<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Orders extends Model
{
    use HasFactory;

    protected $guarded = [];

    // generate uuid for order number
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->order_number)) {
                $model->order_number = Str::uuid()->toString();
            }
        });
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function product()
    {
        return $this->belongsTo(Products::class);
    }

    public function shipping()
    {
        return $this->hasOne(Shipping::class);
    }
}
