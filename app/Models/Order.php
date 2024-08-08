<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Orders extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function getSubTotalAttribute()
    {
        return $this->orderItems->sum('sub_total');
    }

    public function getDiscountAttribute()
    {
        return $this->orderItems->sum('discount');
    }

    public function getTotalAttribute()
    {
        return $this->orderItems->sum('total');
    }
}
