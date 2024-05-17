<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller
{
    public function index(Post $post)
    {
        return Inertia::render("Posts/Index", ["posts" => $post->get()]);
    }

    public function show(Post $post)
    {
        return Inertia::render("Posts/Show", ["post" => $post]);
    }

    public function create()
    {
        return Inertia::render("Posts/Create");
    }
    
    public function store(Request $request, Post $post)
    {
        $input = $request->all();
        $post->fill($input)->save();
        return redirect("/posts/" . $post->id);
    }
}
