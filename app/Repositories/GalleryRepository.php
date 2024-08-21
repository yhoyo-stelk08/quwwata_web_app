<?php

namespace App\Repositories;

interface GalleryRepository
{
  public function index($search, $sortBy, $sortDirection);
  public function create(array $data);
  public function find($id);
  public function update($id, array $data);
  public function delete($id);
  public function edit($id);
  public function createInstance();
}