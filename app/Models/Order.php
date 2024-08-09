<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'status',
        'order_notes',
        'payment_method',
        'transaction_id',
    ];

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
