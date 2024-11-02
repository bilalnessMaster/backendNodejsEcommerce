import React, { useEffect } from 'react'
import { useUserStore } from '../Stores/useUserStore'
import User from './User'

const UsersPanel = () => {
    const {getALLUsers , users} = useUserStore()
    useEffect(()=>{
        getALLUsers()
    },[getALLUsers])

    if(!users) return 'loading'
    // console.log(users);
    
    return (
        <main className='space-y-6'>
            <div>
                <h1 className='text-2xl lg:text-3xl  tracking-tighter'>Users panel</h1>
            </div>
            <div className='w-full border rounded-t-lg'>
                <table className='w-full  rounded-t-md text-left'>
                    <thead className=''>
                        <tr className='bg-gray-100/85 text-gray-700/75 font-normal capitalize text-lg '>
                            <th className='font-[450]   py-2 px-3'>user</th>
                            <th className='font-[450]   py-2 px-3'>role</th>
                            <th className='font-[450]   py-2 px-3'>joined</th>
                            <th className='font-[450]   py-2 px-3'>action</th>
                        </tr>
                    </thead>
                    <tbody>
                  
                    {users && users.map((user)=> (
                        <User key={user._id} {...user} />
                    ))}
                
                    </tbody>
                </table>

            </div>

        </main>
    )
}

export default UsersPanel