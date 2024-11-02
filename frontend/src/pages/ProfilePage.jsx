import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileComp from '../components/ProfileComp'
import { Toaster } from 'react-hot-toast'

const ProfilePage = () => {
    const [isOpen , setIsOpen] = useState('profile')

  return (
    <main className='w-full h-screen bg-gray-50 flex  '>
       <Toaster position="bottom-right " />
        <div className='px-1 py-2 w-32 h-full space-y-7 '>
            <div className='px-1'>
                <Link to='/' className='rounded-full bg-neutral-800 flex justify-center items-center w-fit px-3 py-2 text-lg capitalize font-poppin cursor-pointer '><i className="ri-arrow-left-line text-xl text-white"></i></Link>
            </div>
            <ul className=' flex flex-col gap-1'>
                <li className='hover:bg-white/80 py-2 px-1 rounded-md cursor-pointer'><i className="ri-profile-line text-xl"></i> Profile</li>
                <li className='hover:bg-white/80 py-2 px-1 rounded-md cursor-pointer'><i className="ri-list-ordered text-xl"></i> Orders</li>
                <li className='hover:bg-white/80 py-2 px-1 rounded-md cursor-pointer'><i className="ri-bank-card-line text-xl"></i> Payments</li>
                <li className='hover:bg-white/80 py-2 px-1 rounded-md cursor-pointer'><i className="ri-profile-line text-xl"></i> Orders</li>
            </ul>
        </div>
        <div className='flex-grow pt-16'>
            <div className='w-full h-full bg-white border rounded-tl-md px-4 py-4   '>
                {isOpen === 'profile' && <ProfileComp/>}
            </div>
        </div>

    </main>
  )
}

export default ProfilePage