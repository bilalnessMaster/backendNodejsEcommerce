import React, { useEffect, useState } from 'react'
import { useUserStore } from '../Stores/useUserStore'
import User from './User'

const UsersPanel = () => {
    const {getALLUsers , users  ,totalUser ,totalPage} = useUserStore()
    const [pagination , setPagination] = useState(1)
    useEffect(()=>{
        getALLUsers(pagination)
    },[getALLUsers , pagination])
    
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
                        <User key={user._id} pagination={pagination} {...user} />
                    ))}
                
                    </tbody>
                </table>

            </div>
            <div className='h-20 w-full flex justify-center items-center gap-2'>
                {users && Array.from({length : totalPage} , ( _ , index)=> {
                    return (
                        <button onClick={()=> setPagination(index+1)} key={index} className='border  bg-gray-50 w-9 rounded h-9'>{index+1}</button>
                    )
                })}
            </div>

        </main>
    )
}

export default UsersPanel