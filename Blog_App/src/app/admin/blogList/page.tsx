"use client"

import axios from 'axios'
import {useState, useEffect} from 'react'

interface BlogData{
  _id: string;
    title: string;
    description: string;
    image: string;
    author: string;
    authorImage: string;
    category: string;
}

const BlogList = () => {
  const[blogs, setBlogs] = useState<BlogData[] | null>(null);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");
      setBlogs(response.data.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const deleteBlog = async (id: string) => {
    try {
      await axios.delete("/api/blog", { data: { id } });
      fetchBlogs(); 
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogs);

  return (
      <div className="p-6">
          <h2 className="text-3xl font-bold mb-6 text-center">Blog List</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs?.map((blog: BlogData) => (
                  <div
                      key={blog?._id}
                      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                      <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-48 object-cover"
                      />

                      <div className="p-4">
                          <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">
                              {blog.category}
                          </span>

                          <h3 className="text-xl font-semibold mt-2">
                              {blog.title}
                          </h3>

                          <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                              {blog.description}
                          </p>

                          <div className="flex items-center mt-4">
                              <img
                                  src={blog.authorImage}
                                  alt={blog.author}
                                  className="w-8 h-8 rounded-full mr-2"
                              />
                              <p className="text-sm font-medium text-gray-700">
                                  {blog.author}
                              </p>
                          </div>
                          <button onClick={()=>deleteBlog(blog._id)} className='bg-red-200 p-1 mt-2 text-sm rounded hover:bg-red-300'>Delete</button>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}

export default BlogList
