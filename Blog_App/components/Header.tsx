import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <div className="py-5 px-5 md:px-12 lg:px-28">
          <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold">My Blog</h1>
              <nav>
                  <ul className="flex space-x-4 items-center">
                      <li>
                          <Link href="/">Home</Link>
                      </li>
                      <Link
                          href="/admin/blogList"
                          className="hover:bg-slate-200 px-2 py-1"
                      >
                          Blog List
                      </Link>
                      <Link
                          href="/admin/add"
                          className="hover:bg-slate-200 px-2 py-1"
                      >
                          Add Blog
                      </Link>
                      
                     
                  </ul>
              </nav>
          </div>

          <div className="py- text-center">
              <h2 className="text-2xl underline">Latest Blogs</h2>
              <p className="text-gray-500">
                  Read our latest blogs on various topics
              </p>
             
          </div>
      </div>
  );
}

export default Header
