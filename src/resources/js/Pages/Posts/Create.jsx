import React from "react";
import {Link, useForm} from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Create = (props) => {
    const {categories} = props;

    const {data, setData, post} = useForm({
        title: "",
        body: "",
        category_id: categories[0].id
    })

    function handleSubmit(e) {
        e.preventDefault();
        post("/posts");
    }
    
    return (
        <Authenticated auth={props.auth} header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                Create
            </h2>
        }>
            <div className="py-12">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2>Title</h2>
                        <input type="text" onChange={(e) => setData("title", e.target.value)} />
                    </div>

                    <div>
                        <h2>Body</h2>
                        <textarea onChange={(e) => setData("body", e.target.value)}></textarea>
                    </div>

                    <div>
                        <h2>Category</h2>
                        <select onChange={(e) => setData("category_id", e.target.value)}>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className="p-1 bg-purple-300 hover:bg-purple-400 rounded-md">send</button>
                </form>

                <Link href="/posts">戻る</Link>
            </div>
        </Authenticated>
    );
}

export default Create;