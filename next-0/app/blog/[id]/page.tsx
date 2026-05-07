import React from 'react'

const BlogRedirect = async({ params }: { params: { id: string } }) => {
    const { id } =await params;
  return (
    <div>
      Redirect Page of Blog {id}
    </div>
  )
}

export default BlogRedirect
