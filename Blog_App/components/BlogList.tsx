import React, { useState } from 'react'
import blogs from '../data/data';
import BlogItems from './BlogItems';

type MenuType = "All" | "React" | "TypeScript" | "Web Development";

const BlogList = () => {

    const[menu,setMenu]=useState<MenuType>("All");

  return (
      <div>
          <div className='flex justify-center gap-6 my-5'>
              <button onClick={()=>setMenu("All")} className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'bg-gray-300 text-black py-1 px-4 rounded-sm'}>All</button>
              <button onClick={()=>setMenu("React")} className={menu === "React" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'bg-gray-300 text-black py-1 px-4 rounded-sm'}>React</button>
              <button onClick={()=>setMenu("TypeScript")} className={menu === "TypeScript" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'bg-gray-300 text-black py-1 px-4 rounded-sm'}>TypeScript</button>
              <button onClick={()=>setMenu("Web Development")} className={menu === "Web Development" ? 'bg-black text-white py-1 px-4 rounded-sm' : 'bg-gray-300 text-black py-1 px-4 rounded-sm'}>Web Development</button>
          </div>

          <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {
                blogs.filter((blog) => menu === "All" || blog.category === menu).map((blog) => {
                    return <BlogItems key={blog.id} id={blog.id} image={blog.image} title={blog.title} category={blog.category} description={blog.description} />
                })
            }
          </div>
      </div>
  );
}

export default BlogList
