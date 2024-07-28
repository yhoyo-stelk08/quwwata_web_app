<?php

namespace App\traits;

trait ProductTrait
{
    public function formatProductOutput($model)
    {
        return [
            'id' => $model->id,
            'name' => $model->name,
            'short_description' => $model->short_description,
            'long_description' => $model->long_description,
            'arrow_pass' => $model->arrow_pass,
            'price' => $model->price,
            'draw_weight' => $model->draw_weight,
            'product_images' => $model->product_images->map(function ($image) {
                return [
                    'id' => $image->id,
                    'path' => $image->path,
                    'image_name' => $image->image_name,
                ];
            }),
            'created_at' => $this->formatDate($model->created_at),
            'updated_at' => $this->formatDate($model->updated_at),
        ];
    }

    private function formatDate($date)
    {
        return $date ? \Carbon\Carbon::parse($date)->format('Y-m-d H:i') : null;
    }
}
