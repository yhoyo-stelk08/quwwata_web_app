<?php

namespace App\traits;

trait ContactTrait
{
    function formatContactOutput($model)
    {
        return [
            'id' => $model->id,
            'email' => $model->email,
            'contact_number' => $model->contact_number,
            'message' => $model->message,
            'sent_at' => $this->formatDate($model->created_at),
        ];
    }

    private function formatDate($date)
    {
        return $date ? \Carbon\Carbon::parse($date)->format('Y-m-d H:i') : null;
    }
}
