<?php

namespace App\traits;

trait FormatGallery
{
    public function formatGalleryOutput($model)
    {
        return [
            'title' => $model->title,
            'image_name' => $model->image_name,
            'category' => $model->category,
            'created_at' => $this->formatDate($model->created_at),
            'updated_at' => $this->formatDate($model->updated_at),
        ];
    }

    private function formatDate($date)
    {
        return $date ? \Carbon\Carbon::parse($date)->format('Y-m-d H:i') : null;
    }
}
