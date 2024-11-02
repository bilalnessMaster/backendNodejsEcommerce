import React, { useState } from 'react'
import products from '../data/products'
import ProductsCards from '../components/ProductsCards'
const TrendingProducts = () => {
  const [visible , setVisible] = useState(8)

    const handleViewMore = () => {
        setVisible(prevState => prevState + 4)
    }
  return (
    <section className='container mx-auto flex flex-col items-center gap-12 mt-12 '>
     <div className='flex flex-col gap-2 items-center justify-center '>
     <h1 className='text-5xl  font-play font-bold'>trening this Year</h1>
     <p className='w-[400px] md:w-[500px] text-center text-lg text-gray-400'>
      Discover th Hottest Picks : Elevate your style with our collection of trending products.
      of the year.
     </p>
     </div>
      <ProductsCards products={products.slice(0,visible)} /> 
      <button onClick={handleViewMore} className='bg-red-600/75 text-white px-5 py-3 rounded'>View More</button>
    </section>
  )
}

export default TrendingProducts
