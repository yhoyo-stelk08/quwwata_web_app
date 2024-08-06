<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Quwwata Laminated Turkish Bow',
                'price' => 240,
                'draw_weight' => 40,
                'category' => 'laminated-bow',
                'short_description' => 'A traditional, powerful, handcrafted bow with layered wood and bamboo with turkish model.',
                'arrow_pass' => 'Red',
                'long_description' => '<p>Available : 30-50 lbs @28 inch </p><p> Bow length : 124cm (48 inch)<br> Siyah : mapple/walnut/white ash<br> Handle : white ash with rosewood arrow pass<br> Limbs : bearpaw clearglass, bamboo/oak strip, black fiberglass + optional carbon stable<br> String : bcy 652 spectra<br> Max draw : 29 inch<br> Recomended arrow gpp : 10 gpp</p><p><br></p><p>Warranty : 6 months (normal use/no dry fire)</p><p><br>  Free : Sarung bow</p>',
                'cover_image' => 'images/product_images/1722336577_66a8c541d9ba4.jpeg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Quwwata Laminated Assyrian Bow',
                'price' => 240,
                'draw_weight' => 40,
                'category' => 'laminated-bow',
                'short_description' => 'A traditional, powerful, handcrafted bow with layered wood and bamboo with assyrian model.',
                'arrow_pass' => 'Red',
                'long_description' => '<p style="">Available : 30-50 lbs @28 inch
                                        </p><p style="">
                                        Bow length : 124cm (48 inch)
                                        </p><p style="">Siyah : mapple/walnut/white ash
                                        </p><p style="">Handle : white ash with rosewood arrow pass
                                        </p><p style="">Limbs : bearpaw clearglass, bamboo/oak strip, black fiberglass + optional carbon stable
                                        </p><p style="">String : bcy 652 spectra
                                        </p><p style="">Max draw : 29 inch
                                        </p><p style="">Recomended arrow gpp : 10 gpp
                                        </p><p style=""><br></p><p style="">


                                        Warranty : 6 months (normal use/no dry fire)
                                        </p><p style=""><br></p><p style="">

                                        Free : Sarung bow</p>',
                'cover_image' => 'images/product_images/1722338958_66a8ce8ed57d6.jpeg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Quwwata Fiber Flat Bow',
                'price' => 45,
                'draw_weight' => 40,
                'category' => 'flat-bow',
                'short_description' => 'Fiberglass flat bow',
                'arrow_pass' => 'Red',
                'long_description' => '<p>Available : 30-50 lbs @28 inch </p><p> Bow length : 124cm (48 inch)<br> Siyah : mapple/walnut/white ash<br> Handle : white ash with rosewood arrow pass<br> Limbs : bearpaw clearglass, bamboo/oak strip, black fiberglass + optional carbon stable<br> String : bcy 652 spectra<br> Max draw : 29 inch<br> Recomended arrow gpp : 10 gpp</p><p><br></p><p>Warranty : 6 months (normal use/no dry fire)</p><p><br>  Free : Sarung bow</p>',
                'cover_image' => 'images/product_images/1722330499_66a8ad83c1699.jpeg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'name' => 'Petung Bamboo Arrows',
                'price' => 25,
                'draw_weight' => 40,
                'category' => 'arrows',
                'short_description' => 'Straight bamboo arrow',
                'arrow_pass' => 'Red',
                'long_description' => '<p>Bambu petung premium, </p><p>ruas panjang ±65cm </p><p>
                                    Bulu kalkun import (bisa request warna)
                                    </p><p>Nock plastik import
                                    </p><p>Diameter shaft 8cm
                                    </p><p>Berat total ±28 gram spine 600-650
                                    </p><p>Point cnc import 6 gram
                                    </p><p>Panjang sesuai pesanan (max 31 inch /80cm)
                                    </p><p><br></p><p>Free tabung kertas</p>',
                'cover_image' => 'images/product_images/1722247959_66a76b17b2fc7.jpeg',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ];

        DB::table('products')->insert($products);
    }
}
