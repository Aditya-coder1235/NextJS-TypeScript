import React from "react";

interface Blog {
    id: number;
    title: string;
    description: string;
}

const page = () => {
    const blogs: Blog[] = [
        {
            id: 1,
            title: "First Blog",
            description: "This is the first blog",
        },
        {
            id: 2,
            title: "Second Blog",
            description: "This is the second blog",
        },
        {
            id: 3,
            title: "Third Blog",
            description: "This is the third blog",
        },
    ];
    return (
        <div>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <a href={`/blog/${blog.id}`}>
                        <h2>{blog.title}</h2>
                    </a>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
    );
};

export default page;
