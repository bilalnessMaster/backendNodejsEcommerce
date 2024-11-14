import React from 'react'
import Card from './Card'

const ProductsCards = ({products}) => {
  return (
    <section className='container px-4 md:px-0 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
               products.length > 0 ?  products.map(product => (
                    <Card key={product._id} {...product} /> 
                )): <h1 className='text-center w-full'>not product found</h1>
            }
    </section>
  )
}

export default ProductsCards
