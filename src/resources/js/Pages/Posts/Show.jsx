import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { Link } from "@inertiajs/react";

const Show = (props) => {
    const { post } = props;

    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Index
            </h2>
        }>

            <div className="p-12">
                <h1>{ post.title }</h1>
                
                <div>
                    <h3>本文</h3>
                    <p>{ post.body }</p>
                </div>

                <div>
                    <h3>カテゴリー</h3>
                    <p>{ post.category.name }</p>
                </div>
                
                <div>
                    <Link href="/posts">戻る</Link>
                </div>
            </div>
            <div>
                <Link href={`/posts/${ post.id }/edit`}>編集</Link>
            </div>
        </Authenticated>
    );
}

export default Show;