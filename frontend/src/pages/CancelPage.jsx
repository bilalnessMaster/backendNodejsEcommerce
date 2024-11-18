import React from 'react'
import { Link } from 'react-router-dom'

const CancelPage = () => {
  return (
    <>
    <div className=' h-[500px] py-24'>
        <div className=' font-play text-xl text-red-400'>
            <div className='bg-gray-50 flex mx-auto flex-col justify-center px-2 py-2 items-center rounded-md space-y-6 w-full max-w-sm bg-'>
                <div className='text-center'>
                    <i className="ri-emotion-sad-line text-3xl"></i>
                
                <h1 className='t'>
                    You canceled your order
                </h1>
                </div>
                <div className='flex items-center gap-1'>
                    <Link className='text-green-400 text-sm font-poppin' to='/shop'>continue shopping </Link>
                    <i className="ri-arrow-right-line text-green-400 "></i>
                </div>
            </div>
        </div>
    </div>
</>
  )
}

export default CancelPage