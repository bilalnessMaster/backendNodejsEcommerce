import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import UsersPanel from '../components/UsersPanel'
import CreateProductsPanel from '../components/CreateProductsPanel'
import OrdersPanel from '../components/OrdersPanel'
import ProductDisplay from '../components/ProductDisplay'
const DashboardPage = () => {
    const [isOpen , setIsOpen] = useState('create')
  return (
    <main className='w-full h-screen bg-gray-50 flex  '>
       <Toaster position="bottom-right " />
        <div className='px-1 py-2 w-50 h-full space-y-7 '>
            <div className='px-1'>
                <Link to='/' className='rounded-full bg-neutral-800 flex justify-center items-center w-fit px-3 py-2 text-xl capitalize font-poppin cursor-pointer '><i className="ri-arrow-left-line text-xl text-white"></i></Link>
            </div>
            <ul className='w-full flex flex-col gap-1 bg-gray'>
                <li onClick={()=>setIsOpen('create')} className='hover:bg-white/80 py-2 px-1 rounded-md cursor-pointer'><i className="ri-profile-line text-xl"></i> Create product</li>
                <li onClick={()=>setIsOpen('orders')} className='hover:bg-white/80 py-2 px-1 rounded-md cursor-pointer'><i className="ri-list-ordered text-xl"></i> Orders</li>
                <li onClick={()=>setIsOpen('users')} className='hover:bg-white/80 py-2 px-1 rounded-md cursor-pointer'><i className="ri-bank-card-line text-xl"></i> Users</li>
                <li onClick={()=>setIsOpen('products')} className='hover:bg-white/80 py-2 px-1 rounded-md cursor-pointer'><i className="ri-bank-card-line text-xl"></i> Products</li>
            </ul>
        </div>
        <div className='flex-grow pt-16'>
            <div className='w-full h-full bg-white border rounded-tl-md px-4 py-4   '>
                {isOpen === 'users' && <UsersPanel />}
                {isOpen === 'create' && <CreateProductsPanel />}
                {isOpen === 'orders' && <OrdersPanel />}
                {isOpen === 'products' && <ProductDisplay />}

            </div>
        </div>

    </main>
  )
}

export default DashboardPage