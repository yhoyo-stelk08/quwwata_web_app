<?php

namespace App\Http\Resources;

use App\traits\FormatGallery;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class GalleryResource extends JsonResource
{
    use FormatGallery;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return $this->formatGalleryOutput($this);
    }
}
