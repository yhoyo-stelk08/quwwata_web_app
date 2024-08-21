<?php

namespace App\Services;

use Illuminate\Support\Facades\Storage;

class GalleryService
{
  public function handleImageUpload($image)
  {
    // Ensure the directory exists
    if (!Storage::exists('public/images/gallery')) {
      Storage::makeDirectory('public/images/gallery');
    }

    // Generate a unique name for the image file
    $imageName = time() . '.' . $image->extension();

    // Store the file
    $image->storeAs('public/images/gallery', $imageName);

    return 'images/gallery/' . $imageName; // return the relative path to be saved in  database
  }

  public function handleImageUpdate($gallery, $image)
  {
    // Delete the old image
    Storage::delete('public/' . $gallery->image_name);

    // Upload the new image
    return $this->handleImageUpload($image);
  }

  public function handleImageDelete($gallery)
  {
    // Delete the image
    Storage::delete('public/' . $gallery->image_name);
  }
}