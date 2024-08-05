<?php

namespace App\Traits;

trait CustomerTraits
{
    // format customer data
    public function formatCustomerOutput($model)
    {
        return [
            'id' => $model->id,
            'email' => $model->email,
            'first_name' => $model->first_name,
            'last_name' => $model->last_name,
            'country' => $model->country,
            'province' => $model->province,
            'city' => $model->city,
            'zip_code' => $model->zip_code,
            'phone' => $model->phone,
            'address' => $model->address,
            'created_at' => $this->formatDate($model->created_at),
            'updated_at' => $this->formatDate($model->updated_at),
        ];
    }

    private function formatDate($date)
    {
        return $date ? \Carbon\Carbon::parse($date)->format('Y-m-d H:i') : null;
    }
}
