import React from 'react'
import data from '../data/blogs.json'
import BlogCard from './BlogCard';

const BlogSection = () => {


      
  return (
    <section className='container mx-auto bg-gray-200/55 flex flex-col items-center gap-9 mt-12 py-14 px-8'>
      <div className='flex flex-col items-center gap-4'>
      <h1 className='text-5xl  font-play font-bold'>Latest Blogs </h1>
      <p className='text-xl text-neutral-500 w-[400px] leading-6  text-center'>Elevate your wardrobe with our freshest style tips, trends, and inspiration on our blog.</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {
          data.map(blog=> (
            <BlogCard key={blog.id}  {...blog}/>
          ))
        }
      </div>
    </section>
  )
}

export default BlogSection
