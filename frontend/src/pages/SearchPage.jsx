import React, { useEffect, useState } from 'react'
import ProductsCards from '../components/ProductsCards'

import Footer from '../components/Footer'
import { useProductStore } from '../Stores/useProductStore'
const SearchPage = () => {
    const [search, setSearch] = useState('')
    const  {searchEgine , products } = useProductStore()
    const handlkeSearch = () => {
        searchEgine(search)    
    }
  return (
    <main className='max-w-screen-2xl mx-auto mt-12'>
        <section className='container mx-auto'>
            <div className='w-full mx-auto flex flex-col gap-5 items-center justify-center h-[300px] bg-[#fae9f1]'>
            <h1 className='text-3xl font-play font-bold'>Looking for something ? </h1>
            <p className='text-xl w-[500px] text-center'>
                Discover the latest trends and styles for women.
                website. Explore the latest trends and styles for women.
            </p>
            <label htmlFor="search" className='h-12 border-2 border-gray-300/55 w-1/2  px-1 flex items-center gap-1 justify-between bg-white'>

                <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} name="search" className='w-full px-2 outline-none text-lg' id="search" placeholder='Search...'/>
                <button onClick={handlkeSearch} className='bg-red-600/75 text-white py-2 px-4 '>search</button>
            </label>
            </div>
            <div className='mt-12'>
                {
                    products.length > 0 ?
                    <ProductsCards products={products}  /> : 
                    <h1 className='text-center first-letter:capitalize font-medium text-xl '>product not found </h1>
                }
            </div>
        </section>
      
    </main>
  )
}

export default SearchPage





