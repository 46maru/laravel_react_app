import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

const Index = (props) => {
    const { posts } = props;

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Index
            </h2>
        }>
        
        <div className="">
            <Link href="/posts/create">Create</Link>
        </div>

        <div className="py-12">
            <h1>Blog Name</h1>
            
            { posts.map((post) => (
                <div key={post.id}>
                    <h2>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p>{ post.body }</p>
                </div>
            )) }
        </div>
        </Authenticated>
    );
}

export default Index;