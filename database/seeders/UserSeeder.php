<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Admin User',
                'username' => 'admin',
                'email' => 'admin@example.com',
                'user_role' => 'admin',
                'status' => 'active',
                'email_verified_at' => Carbon::now(),
                'password' => bcrypt('Stelkers08&'),
            ],
            [
                'name' => 'Regular User',
                'username' => 'user',
                'email' => 'user@example.com',
                'user_role' => 'user',
                'status' => 'active',
                'email_verified_at' => Carbon::now(),
                'password' => bcrypt('password'),
            ]
        ];

        DB::table('users')->insert($users);
    }
}
