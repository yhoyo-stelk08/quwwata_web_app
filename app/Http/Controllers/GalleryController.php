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
        $imageName = $this->galleryService->handleImageUpload($request->file('image_name'));

        $this->galleryRepository->create([
            'title' => $request->title,
            'image_name' => $imageName,
            'category' => $request->category,
        ]);

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
            // find the gallery item
            $gallery = $this->galleryRepository->find($gallery->id);

            // set the update data
            $updateData = [
                'title' => $request->title,
                'category' => $request->category,
            ];

            // check if the image is updated
            if ($request->hasFile('image_name')) {
                $imageName = $this->galleryService->handleImageUpload($request->file('image_name'));
                $updateData['image_name'] = $imageName;
            }

            // update the gallery item
            $this->galleryRepository->update($gallery->id, $updateData);

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
        \Log::debug('Entering gallery controller destroy method');
        try {
            // find the gallery item
            $gallery = $this->galleryRepository->find($gallery->id);

            // delete the image from the storage
            $this->galleryService->handleImageDelete($gallery);

            // delete gallery item from database
            $this->galleryRepository->delete($gallery->id);

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
