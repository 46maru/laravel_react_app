<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use DateTime;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('posts')->insert([
            'title' => 'this is title',
            'body' => 'this is body',
            'category_id' => 1,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
            'deleted_at' => null,
        ]);

        DB::table('posts')->insert([
            'title' => 'this is title2',
            'body' => 'this is body2',
            'category_id' => 2,
            'created_at' => new DateTime(),
            'updated_at' => new DateTime(),
            'deleted_at' => null,
        ]);
    }
}
