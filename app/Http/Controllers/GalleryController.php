<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreGalleryRequest;
use App\Http\Requests\UpdateGalleryRequest;
use App\Http\Resources\GalleryResource;
use App\Models\Gallery;
use App\Repositories\GalleryRepository;
use App\Services\GalleryService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    protected $galleryService;
    protected $galleryRepository;

    public function __construct(GalleryService $galleryService, GalleryRepository $galleryRepository)
    {
        $this->galleryService = $galleryService;
        $this->galleryRepository = $galleryRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        \Log::debug('Entering Gallery Index Method');
        $gallery_data = $this->galleryRepository->index(
            $request->input('search'),
            $request->input('sort_by'),
            $request->input('sort_direction')
        );

        // Log the gallery data 
        \Log::info('Gallery Data', ['Gallery Data' => $gallery_data]);

        return inertia('Gallery/Index', [
            'galleriesData' => GalleryResource::collection($gallery_data),
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
        $imageName = time() . '.' . $request->file('image_name')->extension();

        // Store the file
        $request->file('image_name')->storeAs('public/images/gallery', $imageName);

        // Create a new Gallery instance and save the data
        $gallery = new Gallery();
        $gallery->title = $request->title;
        $gallery->image_name = 'images/gallery/' . $imageName; // Save the relative path to the database
        $gallery->category = $request->category;
        $gallery->save();

        // Redirect with a success message
        return redirect()->route('galleries.index')->with('message', ['type' => 'success', 'body' => 'Item Added Successfully']);
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
        return inertia('Gallery/Edit', [
            'data_gallery' => new GalleryResource($gallery),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGalleryRequest $request, Gallery $gallery)
    {
        \Log::debug('Entering gallery controller update method');
        try {
            $gallery->title = $request->title;
            $gallery->category = $request->category;

            if ($request->hasFile('image_name')) {
                // Ensure the directory exists
                if (!Storage::exists('public/images/gallery')) {
                    Storage::makeDirectory('public/images/gallery');
                }

                // Generate a unique name for the image file
                $imageName = time() . '.' . $request->file('image_name')->extension();

                // Store the file
                $request->file('image_name')->storeAs('public/images/gallery', $imageName);

                // Delete the old image
                Storage::delete('public/' . $gallery->image_name);

                // Update the image name
                $gallery->image_name = 'images/gallery/' . $imageName;
            }

            $gallery->save();

            \Log::info('Gallery item updated successfully', ['galleries data' => $gallery]);

            return redirect()->route('galleries.index')
                ->with('message', ['type' => 'success', 'body' => 'Item updated successfully..! ']);
        } catch (\Throwable $th) {
            \Log::error('Error occurred in gallery controller update method', ['error' => $th->getMessage()]);

            return redirect()->back()
                ->with('message', ['type' => 'error', 'body' => 'fail updating gallery data']);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Gallery $gallery)
    {
        try {
            // Delete the image
            Storage::delete('public/' . $gallery->image_name);

            // Delete the gallery item
            $gallery->delete();

            \Log::info('Gallery item deleted successfully', ['gallery data' => $gallery]);

            return redirect()->route('galleries.index')
                ->with('message', ['type' => 'success', 'body' => 'Item deleted successfully..! ']);
        } catch (\Throwable $th) {
            \Log::error('Error occurred in gallery controller destroy method', ['error' => $th->getMessage()]);

            return redirect()->back()
                ->with('message', ['type' => 'error', 'body' => 'fail deleting gallery data']);
        }
    }
}
