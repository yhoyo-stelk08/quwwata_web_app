<?php

namespace App\traits;

trait FormatGallery
{
    public function formatGalleryOutput($model)
    {
        return [
            'id' => $model->id,
            'title' => $model->title,
            'image_name' => $model->image_name,
            'category' => $model->category,
            'created_at' => $model->created_at->format('d M Y'),
            'updated_at' => $model->updated_at->format('d M Y'),
        ];
    }
}
