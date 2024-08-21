<?php

namespace Tests\Unit\Repositories;

use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Models\Gallery;
use App\Repositories\GalleryEloquent;

class GalleryRepositoryTest extends TestCase
{
    use RefreshDatabase;

    protected $galleryRepository;

    protected function setUp(): void
    {
        parent::setUp();

        // Initialize the repository with a Gallery model instance
        $this->galleryRepository = new GalleryEloquent(new Gallery());
    }

    public function test_it_can_get_all_galleries_with_search_and_sort()
    {
        // Create some test data
        Gallery::insert(['title' => 'Bow A', 'image_name' => 'image1.jpg', 'category' => 'laminated bow']);
        Gallery::insert(['title' => 'Bow B', 'image_name' => 'image2.jpg', 'category' => 'flat bow']);
        Gallery::insert(['title' => 'Arrows C', 'image_name' => 'image3.jpg', 'category' => 'arrows']);
        Gallery::insert(['title' => 'Accessories D', 'image_name' => 'image3.jpg', 'category' => 'accessories']);

        // Simulate a search, sortBy, and sortDirection request
        $search = 'Bow';
        $sortBy = 'title';
        $sortDirection = 'asc';

        // Get the galleries
        $galleries = $this->galleryRepository->index($search, $sortBy, $sortDirection);

        // Assertion of the galleries
        $this->assertCount(2, $galleries->items()); // Bow A and Bow B
        $this->assertEquals('Bow A', $galleries->first()->title); // Bow A
        $this->assertEquals('Bow B', $galleries->last()->title); // Bow B


        // Simulate a sortBy and sortDirection request
        $search = '';
        $sortBy = 'title';
        $sortDirection = 'desc';

        $galleries = $this->galleryRepository->index($search, $sortBy, $sortDirection);

        // Assertion of the galleries
        $this->assertCount(4, $galleries->items()); // Bow A, Bow B, Arrows C, and Accessories D
        $this->assertEquals('Bow B', $galleries->first()->title); // Bow B
        $this->assertEquals('Accessories D', $galleries->last()->title); // Accessories D
    }
}
