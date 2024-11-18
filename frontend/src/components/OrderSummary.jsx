import React, { useEffect } from 'react'
import { useCarteStore } from '../Stores/useCarteStore'
import {loadStripe } from '@stripe/stripe-js'
import toast from 'react-hot-toast'
import axios from '../lib/axios'


const stiprePromise = loadStripe(
  'pk_test_51QLnwIKzdpr965IQoOUHWh4IzzD3PxtgP6Jn4kflANC7IHlLCtSgT4HMClBpdIfMr0CfvDDiz6CZ7wTaJOao96hK00fwVIoQGw'
);

const OrderSummary = () => {

    const {TotalPrice,
        tax,
        taxRate,
        cartItems,
        } = useCarteStore()
        const handlePayment = async  () => { 
              try{
                const {data} = await axios.post('payment/payment-process' , {cartItems})
                const stripe = await stiprePromise
                const result = await stripe.redirectToCheckout({
                  sessionId : data.session_id 
                })
                if(result.error){
                  toast.error(result.error)
                }
              }catch(error){
                toast.error(error.message)
              }
                  
        }
       

  return (
    <div className='w-full  rounded-sm '>
      <div className='flex flex-col gap-1'>
        <div className='bg-gray-200/55 px-2 py-2 rounded-sm' >
        <h1 className='text-gray-600  text-sm'><span className='font-medium'>Price : </span> ${TotalPrice} </h1>
        <h1 className='w-full  text-gray-600  text-sm'><span className='font-medium'>tax rate</span> : {taxRate} </h1>
        </div>
        <div className='bg-gray-200/55 text-green-500 px-2 py-2 rounded-sm' >
        <h1><span className='text-black/75 capitalize'>grand total</span> : ${TotalPrice*taxRate + TotalPrice} </h1>
        </div>
      <div>
        <button onClick={handlePayment} className='w-full py-2 flex items-center gap-1 justify-center bg-yellow-500 font-semibold rounded-sm'><i className="ri-money-dollar-circle-fill text-2xl"></i> Checkout the payment</button>
      </div>
      </div>
    </div>
  )
}

export default OrderSummary
