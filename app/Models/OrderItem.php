<?php

// app/Models/OrderItem.php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'sub_total',
        'discount',
        'total',
        'draw_weight',
        'arrow_pass',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }
}
