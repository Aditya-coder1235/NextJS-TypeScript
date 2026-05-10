"use client";

import React, { useState } from "react";
import axios from "axios";

interface BlogData{
    title: string;
    description: string;
    image: string;     
    author: string;
    authorImage: string;
    category: string;
}

const page = () => {
    const [formData, setFormData] = useState<BlogData>({
        title: "",
        description: "",
        image: "",
        author: "",
        authorImage: "",
        category: "",
    });

    const addBlog = async () => {
        try {
            const response = await axios.post("/api/blog", formData);
            console.log("Blog added successfully:", response.data);
        } catch (error) {
            console.error("Error adding blog:", error);
        }
    };

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addBlog();
    };

    return (
        <>
        <h2 className="text-2xl ">Upload Blog</h2>
            <form className="pt-5 px-5 border flex justify-center flex-col items-center" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <p className="text-xl">Upload Thumbnail</p>
                    <input
                        type="text"
                        id="thumbnail"
                        name="image"
                        onChange={handleChange}
                        className="mt-1 block w-100 border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="mt-1 block w-100 border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium"
                    >
                        description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-100 border border-gray-300 rounded-md p-2"
                        rows={10}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="author"
                        className="block text-sm font-medium"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="mt-1 block w-100 border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="authorImage"
                        className="block text-sm font-medium"
                    >
                        Author Image
                    </label>
                    <input
                        type="text"
                        id="authorImage"
                        name="authorImage"
                        value={formData.authorImage}
                        onChange={handleChange}
                        className="mt-1 block w-100 border border-gray-300 rounded-md p-2"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium"
                    >
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="mt-1 block w-100 border border-gray-300 rounded-md p-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default page;
