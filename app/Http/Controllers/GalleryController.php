<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGalleryRequest;
use App\Http\Resources\GalleryResource;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        \Log::debug('Entering Gallery Index Method');
        $query = Gallery::search($request);

        // Add sorting
        if ($request->has('sort_by') && $request->has('sort_direction')) {
            $query->orderBy($request->get('sort_by'), $request->get('sort_direction'));
        } else {
            // Default sorting
            $query->orderByDesc('updated_at');
        }

        $gallery = $query->paginate(10);

        $gallery_data = GalleryResource::collection($gallery);

        // Log the gallery data 
        \Log::info('Gallery Data', ['Gallery Data' => $gallery_data]);

        return inertia('Gallery/Index', [
            'galleriesData' => $gallery_data,
            'search' => $request->search ?? "",
            'sort_by' => $request->sort_by ?? "",
            'sort_direction' => $request->sort_direction ?? "",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Gallery/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGalleryRequest $request)
    {
        // Ensure the directory exists
        if (!Storage::exists('public/images/gallery')) {
            Storage::makeDirectory('public/images/gallery');
        }

        // Generate a unique name for the image file
        $imageName = time() . '.' . $request->file('image')->extension();

        // Store the file
        $request->file('image')->storeAs('public/images/gallery', $imageName);

        // Create a new Gallery instance and save the data
        $gallery = new Gallery();
        $gallery->title = $request->title;
        $gallery->image_name = 'images/gallery/' . $imageName; // Save the relative path to the database
        $gallery->category = $request->category;
        $gallery->save();

        // Redirect with a success message
        return redirect()->route('galleries.index')->with('success', 'Gallery item added successfully.');
    }


    /**
     * Display the specified resource.
     */
    public function show(Gallery $gallery)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Gallery $gallery)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Gallery $gallery)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        //
    }
}
