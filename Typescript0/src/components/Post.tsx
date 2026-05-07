import React, { useEffect } from "react";
import type { Post } from "../types/type";

const Post = () => {
    const [posts, setPosts] = React.useState<Post[] | null>([]);

    const fetchPost = async () => {
        try {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts",
            );
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <div>
            {posts && posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Post;
