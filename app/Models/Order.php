<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

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

    public function scopeSearch(Builder $query, $search)
    {
        if ($search) {
            return $query->where('id', 'like', '%' . $search . '%')
                ->orWhere('status', 'like', '%' . $search . '%')
                ->orWhere('order_notes', 'like', '%' . $search . '%')
                ->orWhere('payment_method', 'like', '%' . $search . '%')
                ->orWhere('transaction_id', 'like', '%' . $search . '%')
                ->orWhereHas('customer', function ($q) use ($search) {
                    $q->where('first_name', 'like', '%' . $search . '%')
                        ->orWhere('last_name', 'like', '%' . $search . '%');
                })
                ->orWhereHas('orderItems', function ($q) use ($search) {
                    $q->whereHas('product', function ($q) use ($search) {
                        $q->where('name', 'like', '%' . $search . '%');
                    });
                });
        }


        return $query;
    }

}
