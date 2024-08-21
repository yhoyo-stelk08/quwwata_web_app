<?php

namespace Tests\Unit\Models;

use App\Models\Gallery;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class GalleryTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_it_can_create_a_gallery(): void
    {
        $data = [
            'title' => 'Test Gallery',
            'image_name' => 'test_image.jpg',
            'category' => 'laminated bow',
        ];

        $gallery = Gallery::create($data);

        $this->assertInstanceOf(Gallery::class, $gallery);
        $this->assertEquals('Test Gallery', $gallery->title);
        $this->assertEquals('test_image.jpg', $gallery->image_name);
        $this->assertEquals('laminated bow', $gallery->category);
    }

    public function test_it_has_fillable_properties()
    {
        $gallery = new Gallery();

        $this->assertEquals(['title', 'image_name', 'category'], $gallery->getFillable());
    }

    public function test_it_can_search_by_title_image_name_or_category()
    {
        // Create some test data
        Gallery::create(['title' => 'Bow A', 'image_name' => 'image1.jpg', 'category' => 'laminated bow']);
        Gallery::create(['title' => 'Bow B', 'image_name' => 'image2.jpg', 'category' => 'flat bow']);
        Gallery::create(['title' => 'Arrow C', 'image_name' => 'image3.jpg', 'category' => 'arrows']);

        // Simulate a search request
        request()->merge(['search' => 'Bow']);

        $galleries = Gallery::search()->get();

        $this->assertCount(2, $galleries);
        $this->assertTrue($galleries->contains('title', 'Bow A'));
        $this->assertTrue($galleries->contains('title', 'Bow B'));
        $this->assertFalse($galleries->contains('title', 'Arrow C'));
    }
}
