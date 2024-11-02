import React from 'react'

const CardFashion = ({id  , img , title , trend}) => {
  return (
    <article className='relative'>
      <div>
        <img src={img} className="w-full" alt="" />
      </div>
      <div className='absolute left-52 top-1/2 sm:left-44 sm:top-1/2    xl:top-1/2 xl:left-44 md:top-12 '>
        <p>{trend}</p>
        <h2 className='lg:text-xl xl:text-3xl sm:text-4xl  font-play  '>{title}</h2>
        <a href="#" className='text-lg lg:text-xl underline font-thin'>Discover More+</a>
      </div>
    </article>
  )
}

export default CardFashion
