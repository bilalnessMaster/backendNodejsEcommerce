import React, { useEffect } from 'react'
import { useCarteStore } from '../Stores/useCarteStore'

const OrderSummary = () => {
    const {TotalPrice,
        tax,
        taxRate,
        grandTotal , clearCart , processPayment ,calculateTotal ,cartItems} = useCarteStore()

       

  return (
    <div className='w-full  rounded-sm '>
      <div className='flex flex-col gap-1'>
        <div className='bg-gray-200/55 px-2 py-2 rounded-sm' >
        <h1 className='text-gray-600  text-sm'><span className='font-medium'>Price : </span> ${TotalPrice} </h1>
        <h1 className='w-full  text-gray-600  text-sm'><span className='font-medium'>tax rate</span> : {taxRate} </h1>
        </div>
        <div className='bg-gray-200/55 text-green-500 px-2 py-2 rounded-sm' >
        <h1><span className='text-black/75 capitalize'>grand total</span> : ${grandTotal} </h1>
        </div>
      <div>
        <button className='w-full py-2 flex items-center gap-1 justify-center bg-yellow-500 font-semibold rounded-sm'><i class="ri-money-dollar-circle-fill text-2xl"></i> Checkout the payment</button>
      </div>
      </div>
    </div>
  )
}

export default OrderSummary
