"use client"

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import blogs from "../../../../data/data";

interface BlogData{
    id: number;
    title: string;
    description: string;
    image: string;
    date: string;
    category: string;
    author: string;
    authorImage:string
}

const Page = () => {
    const {id}=useParams<{id:string}>();
    const[data,setData]=useState<BlogData | null>(null);


    const fetchBlogs=()=>{
        for(let i=0; i<blogs.length; i++){
            if(id===blogs[i].id.toString()){
                setData(blogs[i]);
            }
        }
    }

    useEffect(()=>{
        fetchBlogs()
    },[])

    console.log(data)

    return (
        <div>
            {
                data ? (
                    <div className="max-w-4xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
                        <img src={data.image} alt={data.title} className="w-full h-64 object-cover rounded-lg" />   
                        <div className="mt-5">
                            <h1 className="text-3xl font-bold mb-3">{data.title}</h1>
                            <p className="text-gray-600 mb-5">{data.date} | {data.category}</p>
                            <p className="text-gray-800 text-lg">{data.description}</p>
                            <div className="flex items-center mt-5">
                                <img src={data.authorImage} alt={data.author} className="w-10 h-10 rounded-full mr-3" />
                                <p className="text-gray-700">{data.author}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-10">Blog not found.</p>
                )
            }
        </div>
    );
};

export default Page;
