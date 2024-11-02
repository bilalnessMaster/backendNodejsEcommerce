import React, { useEffect, useState } from 'react'
import ProductsCards from '../components/ProductsCards'
import products from '../data/products'
import Footer from '../components/Footer'
const SearchPage = () => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState(products)
    const handlkeSearch = () => {
        const regx  = new RegExp(search, 'gi')
        
        if (!search) return
        setData(products.filter(product => regx.test(product.name) || regx.test(product.category) || regx.test(product.description)))

        
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
            <label htmlFor="search" className='h-12 border-2 border-gray-300/55 w-1/2  px-1 flex items-center justify-between bg-white'>

                <input type="search" value={search} onChange={(e)=>setSearch(e.target.value)} name="search" className='w-full px-2 outline-none text-lg' id="search" placeholder='Search...'/>
                <button onClick={handlkeSearch} className='bg-red-600/75 text-white py-2 px-4 '>search</button>
            </label>
            </div>
            <div className='mt-12'>
                <ProductsCards products={data}  />
            </div>
        </section>
      
    </main>
  )
}

export default SearchPage
