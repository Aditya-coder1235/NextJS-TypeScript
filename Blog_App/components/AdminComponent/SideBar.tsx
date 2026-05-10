import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <div className='px-2 py-3 border-black'>
        <h1 className='text-2xl font-bold'>Admin Panel</h1>
      </div>
      <div className='flex flex-col gap-2 mt-5 px-2 py-3 border-black'>
        <a href='/admin' className='hover:bg-slate-200 px-2 py-1'>
          Dashboard
        </a>
        <a href='/admin/blogList' className='hover:bg-slate-200 px-2 py-1'>
          Blog List
        </a>
        <a href='/admin/add' className='hover:bg-slate-200 px-2 py-1'>
          Add Blog
        </a>
        <a href='/admin/suscription' className='hover:bg-slate-200 px-2 py-1'>
          Subscription
        </a>
      </div>
    </div>
  )
}

export default SideBar
