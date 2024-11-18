

import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import axios from '../lib/axios';

const SuccesfullyPage = () => {
    const [searchParams] = useSearchParams()
    
    
    useEffect(()=>{
            const fetch = async (session_id) =>{
                const {data} = await axios.post('payment/check-out-session' , {session_id})

            }
            const session_id = searchParams.get('session_id');
            fetch(session_id)
    },[])

  return (
    <>
        <div className=' h-[500px] py-24'>
            <div className=' font-play text-xl text-green-400'>
                <div className='bg-gray-50 flex mx-auto flex-col justify-center px-2 py-2 items-center rounded-md space-y-6 w-full max-w-sm bg-'>
                    <div className='text-center'>
                        <i className="ri-shield-check-line text-3xl"></i>
                    
                    <h1 className='t'>
                        Succesfully place your order
                    </h1>
                    </div>
                    <div className='w-full px-2 py-2 space-y-1 divide-y bg-gray-100 rounded-md font-poppin text-sm text-black '>
                        <p className='flex justify-between items-center'><span>Order number : </span><span>129892</span></p>
                        <p className='flex justify-between items-center '><span>Estime date : </span><span>12/24/2024</span></p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <Link className='text-green-400 text-sm font-poppin' to='/shop'>continue shopping </Link>
                        <i className="ri-arrow-right-line"></i>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SuccesfullyPage