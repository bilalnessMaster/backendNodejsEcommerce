import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = ({id , subtitle , title , date , imageUrl}) => {
  return (
    <Link to='/' key={id} className='bg-white rounded-md shadow-xl shadow-black/10 flex-col flex gap-2'>
      <div>
        <img src={imageUrl} className='  object-cover' alt="" />
      </div>
      <div className='flex flex-col gap-4 px-2 py-1'>
        <div className='flex flex-col  '>
        <p className='text-red-500'>
                #{subtitle}
        </p>    
        <h3 className='text-lg leading-5 text-black font-medium'>{title}</h3>
        </div>
           
        <p className='text-gray-300 p'>
                {date}
            </p>
      </div>
     
    </Link>
  )
}

export default BlogCard
