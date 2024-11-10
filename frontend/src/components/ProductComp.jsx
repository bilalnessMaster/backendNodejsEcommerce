import React from 'react'
import { useProductStore } from '../Stores/useProductStore'

const ProductComp = ({pagination, _id ,name , category ,  imageURL , price , trend}) => {
    
    
    const {loading ,setTrend} = useProductStore()
  return (
    <tr className='border-b-2'>
        <td className='flex gap-2 px-2 py-2 '>
            <img className='h-12 w-12' src={imageURL} alt="" />
         <span className='flex flex-col leading-4 items-start'>
            <span> {name}</span>
           <span className='text-black/55'>{category} </span>
            </span>   
        </td>
        <td className='px-2'>
            ${price}
        </td>
        <td className='px-2 text-2xl'>
            <button onClick={()=>setTrend(_id , pagination)}>
            {
                trend ? 
                <i  className="ri-gemini-fill text-yellow-500"></i>
                : <i className="ri-gemini-line"></i>
            }
            </button>
        </td>
        <td className='px-2  text-rose-500 '>
            <button className='border-b-2 border-rose-500'>Delete</button>
        </td>
    </tr>
  )
}

export default ProductComp