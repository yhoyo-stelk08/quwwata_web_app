<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProductImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $productImages = [
            ['image_name' => '1722247959_66a76b17b667a.jpeg', 'path' => 'images/product_images/1722247959_66a76b17b667a.jpeg', 'product_id' => '4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722247959_66a76b17b8a17.jpeg', 'path' => 'images/product_images/1722247959_66a76b17b8a17.jpeg', 'product_id' => '4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722247959_66a76b17ba8f9.jpeg', 'path' => 'images/product_images/1722247959_66a76b17ba8f9.jpeg', 'product_id' => '4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722247959_66a76b17bc9dd.jpeg', 'path' => 'images/product_images/1722247959_66a76b17bc9dd.jpeg', 'product_id' => '4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722247959_66a76b17bebaa.jpeg', 'path' => 'images/product_images/1722247959_66a76b17bebaa.jpeg', 'product_id' => '4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722247959_66a76b17c0c13.jpeg', 'path' => 'images/product_images/1722247959_66a76b17c0c13.jpeg', 'product_id' => '4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722247959_66a76b17c3ee1.jpeg', 'path' => 'images/product_images/1722247959_66a76b17c3ee1.jpeg', 'product_id' => '4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722247959_66a76b17c6934.jpeg', 'path' => 'images/product_images/1722247959_66a76b17c6934.jpeg', 'product_id' => '4', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722330499_66a8ad83c4ca4.jpeg', 'path' => 'images/product_images/1722330499_66a8ad83c4ca4.jpeg', 'product_id' => '3', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722330499_66a8ad83c76ac.jpeg', 'path' => 'images/product_images/1722330499_66a8ad83c76ac.jpeg', 'product_id' => '3', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722330499_66a8ad83c9862.jpeg', 'path' => 'images/product_images/1722330499_66a8ad83c9862.jpeg', 'product_id' => '3', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722330499_66a8ad83cbad6.jpeg', 'path' => 'images/product_images/1722330499_66a8ad83cbad6.jpeg', 'product_id' => '3', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722330499_66a8ad83cdff9.jpeg', 'path' => 'images/product_images/1722330499_66a8ad83cdff9.jpeg', 'product_id' => '3', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722330499_66a8ad83d06f4.jpeg', 'path' => 'images/product_images/1722330499_66a8ad83d06f4.jpeg', 'product_id' => '3', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722330499_66a8ad83d2a28.jpeg', 'path' => 'images/product_images/1722330499_66a8ad83d2a28.jpeg', 'product_id' => '3', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722330499_66a8ad83d4a77.jpeg', 'path' => 'images/product_images/1722330499_66a8ad83d4a77.jpeg', 'product_id' => '3', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722336577_66a8c541ef1e9.jpeg', 'path' => 'images/product_images/1722336577_66a8c541ef1e9.jpeg', 'product_id' => '1', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722336577_66a8c541f23c2.jpeg', 'path' => 'images/product_images/1722336577_66a8c541f23c2.jpeg', 'product_id' => '1', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722336578_66a8c5420097d.jpeg', 'path' => 'images/product_images/1722336578_66a8c5420097d.jpeg', 'product_id' => '1', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722336578_66a8c54203b92.jpeg', 'path' => 'images/product_images/1722336578_66a8c54203b92.jpeg', 'product_id' => '1', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722336578_66a8c54206730.jpeg', 'path' => 'images/product_images/1722336578_66a8c54206730.jpeg', 'product_id' => '1', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722336578_66a8c542091ad.jpeg', 'path' => 'images/product_images/1722336578_66a8c542091ad.jpeg', 'product_id' => '1', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722336578_66a8c5420bcdd.jpeg', 'path' => 'images/product_images/1722336578_66a8c5420bcdd.jpeg', 'product_id' => '1', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722336578_66a8c5420e5fd.jpeg', 'path' => 'images/product_images/1722336578_66a8c5420e5fd.jpeg', 'product_id' => '1', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722338958_66a8ce8ee84ef.jpeg', 'path' => 'images/product_images/1722338958_66a8ce8ee84ef.jpeg', 'product_id' => '2', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722338958_66a8ce8eebac6.jpeg', 'path' => 'images/product_images/1722338958_66a8ce8eebac6.jpeg', 'product_id' => '2', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722338958_66a8ce8eee66c.jpeg', 'path' => 'images/product_images/1722338958_66a8ce8eee66c.jpeg', 'product_id' => '2', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722338958_66a8ce8ef11e8.jpeg', 'path' => 'images/product_images/1722338958_66a8ce8ef11e8.jpeg', 'product_id' => '2', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722338958_66a8ce8ef3c2f.jpeg', 'path' => 'images/product_images/1722338958_66a8ce8ef3c2f.jpeg', 'product_id' => '2', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722338959_66a8ce8f03121.jpeg', 'path' => 'images/product_images/1722338959_66a8ce8f03121.jpeg', 'product_id' => '2', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722338959_66a8ce8f05d8e.jpeg', 'path' => 'images/product_images/1722338959_66a8ce8f05d8e.jpeg', 'product_id' => '2', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['image_name' => '1722338959_66a8ce8f08a1c.jpeg', 'path' => 'images/product_images/1722338959_66a8ce8f08a1c.jpeg', 'product_id' => '2', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ];
        DB::table('product_images')->insert($productImages);
    }
}
