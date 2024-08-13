<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'contacts';

    protected $guarded = [];

    public function scopeSearch(Builder $query, $search): Builder
    {
        if ($search) {
            return $query->where('email', 'like', '%' . $search . '%')
                ->orWhere('contact_number', 'like', '%' . $search . '%')
                ->orWhere('message', 'like', '%' . $search . '%');
        }

        return $query;
    }
}
