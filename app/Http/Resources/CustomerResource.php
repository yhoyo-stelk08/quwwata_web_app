<?php

namespace App\Http\Resources;

use App\traits\CustomerTraits;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CustomerResource extends JsonResource
{
    use CustomerTraits;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->formatCustomerOutput($this);
    }
}
