<?php

namespace App\Repositories;

use App\Models\Gallery;

class GalleryEloquent implements GalleryRepository
{

  protected $model;

  public function __construct(Gallery $model)
  {
    $this->model = $model;
  }

  public function index($search, $sortBy, $sortDirection)
  {
    $query = $this->model::search($search);

    // Add sorting
    if ($sortBy && $sortDirection) {
      $query->orderBy($sortBy, $sortDirection);
    } else {
      // Default sorting
      $query->orderByDesc('updated_at');
    }

    return $query->paginate(10);
  }

  public function create(array $data)
  {
    return $this->model->create($data);
  }

  public function find($id)
  {
    return $this->model->findOrFail($id);
  }

  public function update($id, array $data)
  {
    $gallery = $this->model->findOrFail($id);
    $gallery->update($data);

    return $gallery;
  }

  public function delete($id)
  {
    $gallery = $this->model->findOrFail($id);
    $gallery->delete();
  }

  public function edit($id)
  {
    return $this->model->find($id);
  }

  public function createInstance()
  {
    return new Gallery();
  }
}