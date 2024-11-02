import React from 'react'

const ServicesBanner = () => {
  return (
    <section className='container mx-auto  flex flex-col items-center gap-9 mt-12 py-14 px-8'>
      <h1 className='text-5xl  font-play font-bold'>Our Services</h1>
    <section className=' flex flex-col gap-8  lg:flex-row items-center justify-center  mt-20'>
      <article className='flex flex-col gap-2 items-center bg-gray-100/65 px-2 py-7 rounded-md'>
        <span>
        <i className="ri-truck-line text-3xl text-red-600 rounded-full px-2 py-2 ring ring-red-500"></i>
        </span>
        <h4 className='font-semibold'>
            Free Delevery
        </h4>
        <p className='w-[300px] text-center text-gray-500'>
            Offers convenience and the ability to shop online <span className='text-gray-100/65'>jkahdajhjkdshfjkhjkshfjkhsdfjshdfsjhsdfkj</span>
        </p>
      </article>
      <article className='flex flex-col gap-2 items-center bg-gray-100/65 px-2 py-7 rounded-md'>
        <span>
        <i className="ri-money-dollar-circle-line text-3xl text-red-600 rounded-full px-2 py-2 ring ring-red-500"></i>
        </span>
        <h4 className='font-semibold'>
          100% money back guaranty
        </h4>
        <p className='w-[300px] text-center text-gray-500'>
            E-commerce have a review system that allows customers to leave reviews on their products.
        </p>
      </article>
      <article className='flex flex-col gap-2 items-center bg-gray-100/65 px-2 py-7 rounded-md'>
        <span>
        <i className="ri-user-line text-3xl text-red-600 rounded-full px-2 py-2 ring ring-red-500"></i>
        </span>
        <h4 className='font-semibold'>
         strong Support 
        </h4>
        <p className='w-[300px] text-center text-gray-500'>
           Offer customer support services to assist customers with queries and issues.
        </p>
      </article>
     
    </section>
    </section>
  )
}

export default ServicesBanner
