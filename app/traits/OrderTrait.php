<?php

namespace App\traits;

trait OrderTrait
{
    public function formatOrderOutput($model)
    {
        return [
            'id' => $model->id,
            'customer' => [
                'id' => $model->customer->id,
                'first_name' => $model->customer->first_name,
                'last_name' => $model->customer->last_name,
                'email' => $model->customer->email,
                'phone_number' => $model->customer->phone_number,
                'address' => $model->customer->address,
                'city' => $model->customer->city,
                'province' => $model->customer->province,
                'country' => $model->customer->country,
                'zip_code' => $model->customer->zip_code,
            ],
            'customer_name' => $model->customer->first_name . ' ' . $model->customer->last_name,
            'customer_email' => $model->customer->email,
            'payment_status' => $model->status,
            'order_notes' => $model->order_notes,
            'payment_method' => $model->payment_method,
            'transaction_id' => $model->transaction_id,
            'order_items' => $model->orderItems->map(function ($item) {
                return [
                    'id' => $item->id,
                    'product_id' => $item->product_id,
                    'product_name' => $item->product->name,
                    'quantity' => $item->quantity,
                    'sub_total' => $item->sub_total,
                    'discount' => $item->discount,
                    'total' => $item->total,
                    'draw_weight' => $item->draw_weight,
                    'arrow_pass' => $item->arrow_pass,
                ];
            }),
            'sub_total' => $model->sub_total,
            'discount' => $model->discount,
            'total_payment' => $model->total,
            'created_at' => $this->formatDate($model->created_at),
            'updated_at' => $this->formatDate($model->updated_at),
        ];
    }

    private function formatDate($date)
    {
        return $date ? \Carbon\Carbon::parse($date)->format('Y-m-d H:i') : null;
    }
}
