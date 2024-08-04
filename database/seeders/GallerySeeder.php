<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Gallery;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $galleries = [
            [
                'title' => 'Laminated Bow 1',
                'image_name' => 'images/gallery/1722245216.jpg',
                'category' => 'laminated bow'
            ],
            [
                'title' => 'Fiber Bow 1',
                'image_name' => 'images/gallery/1722245233.jpg',
                'category' => 'flat bow'
            ],
            [
                'title' => 'Arrows 1',
                'image_name' => 'images/gallery/1722245261.jpg',
                'category' => 'arrows'
            ],
            [
                'title' => 'Accessories 1',
                'image_name' => 'images/gallery/1722245345.jpg',
                'category' => 'accessories'
            ],
        ];

        Gallery::insert($galleries);
    }
}
