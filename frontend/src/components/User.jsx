import React from 'react'
import moment from 'moment'
import { useUserStore } from '../Stores/useUserStore'
const User = ({firstName , email , _id , role , createdAt}) => {
    const {updateRole ,  deleteUser} = useUserStore()
  return (
    <tr className='border-t  '>
        <td className=' py-[0.6rem] px-3 flex items-center gap-2 font-medium w-fit'> 
            <span className='uppercase text-lg bg-neutral-700 px-[1.1rem] py-[0.6rem] text-white  rounded-full'>{firstName.charAt(0)}</span>
            <div className='leading-[1.2rem]'>
                <p>{firstName}</p>
                <p className='text-gray-500 font-normal'>{email}</p>
            </div>
        </td>
        <td className='px-3'>
            <select  onChange={(e)=>updateRole(_id , e.target.value)} className='border-2 rounded-md px-2 py-1 text-center capitalize' name="role" value={role}  id="">
                <option value="customer">customer</option>
                <option value="admin">admin</option>
            </select>
        </td>
        <td className='px-3 text-green-500'>
            <span className='first-letter:capitalize text-green-500'>Joined </span> {moment(createdAt).format('YYYY')}
        </td>
        <td className='px-3'>
            
        <button className='text-red-600 border-b-2 border-red-600' onClick={()=>deleteUser(_id)}>
            Delete
        </button>
        
        </td>    


    </tr>
  )
}

export default User