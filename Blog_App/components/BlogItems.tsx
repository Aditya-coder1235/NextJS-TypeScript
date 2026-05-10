import React from 'react'
import Image from 'next/image'

interface BlogProps {
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
}


const BlogItems = ({ id,image, title, category, description }: BlogProps) => {
    return (
        <div className="w-70 h-100 bg-white border border-black p-4 rounded-lg shadow-md">
            <Image src={image} alt={title} width={300} height={100} />
            <p className="text-sm text-gray-500 mt-1">{category}</p>
            <h2 className="text-lg font-bold mt-1">{title}</h2>
            <p className="text-gray-700 text-sm mt-1">{description}</p>
            <a href={`/blog/${id}`} className="text-blue-500 hover:underline mt-2">
                <div className="flex items-center mt-1">Read More</div>
            </a>
        </div>
    );
};

export default BlogItems
