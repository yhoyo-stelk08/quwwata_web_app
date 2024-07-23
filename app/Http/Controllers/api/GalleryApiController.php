<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;

class GalleryApiController extends Controller
{
    public function allGalleryData()
    {
        $galleries = Gallery::all();
        return response()->json($galleries);
    }
}
