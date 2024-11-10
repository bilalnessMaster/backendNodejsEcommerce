import React, { useEffect, useState } from 'react'
import { useProductStore } from '../Stores/useProductStore';
import ProductComp from './ProductComp';

const ProductDisplay = () => {
    const [ pagination, setPagination ] = useState(1);
    const { products, getProducts, setTrend , totalePage } = useProductStore()
    const [filter, setFilter] = useState({
        page: 1
    })

    useEffect(() => {
        setFilter({ page: pagination })
    }, [pagination])

    useEffect(() => {
        getProducts(filter)
    }, [getProducts, filter ,setTrend])
    return (
        <main className='space-y-6'>
            <div>
                <h1 className='text-2xl lg:text-3xl  tracking-tighter'>Products panel</h1>
            </div>
            <div className='w-full rounded-t-lg border'>
                <div>
                    <table className='w-full rounded-t-lg text-left'>
                        <thead className='bg-gray-50 rounded-t-lg '>
                            <tr className='rounded-t-lg'>
                                <th className='font-[450]  text-gray-700/75 py-2 px-3'>Product</th>
                                <th className='font-[450]  text-gray-700/75 py-2 px-3'>Price</th>
                                <th className='font-[450]  text-gray-700/75 py-2 px-3'>Trend</th>
                                <th className='font-[450]  text-gray-700/75 py-2 px-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {products && products.map((product) => (
                                //   <User key={user._id} pagination={pagination} {...user} />
                                <ProductComp pagination={pagination} key={product._id} {...product} />
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='h-20 w-full flex justify-center items-center gap-2'>
                {

                    products && Array.from({ length: totalePage }, (_, index) => {
                        return <button onClick={() => setPagination(index + 1)} key={index} className='border  bg-gray-50 w-9 rounded h-9'>{index + 1}</button>
                    })
                }
            </div>
        </main>
    )
}

export default ProductDisplay