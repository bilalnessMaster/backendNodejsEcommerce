import React, { useEffect } from 'react'
import { useCarteStore } from '../Stores/useCarteStore'

const CartCard = ({index , id ,name, image , price  , quantity , }) => {
    const {cartItems ,RemoveFromCarte , updateQuantity} = useCarteStore()

  return (
    <article className='h-[80px] flex items-center justify-between px-2 py-2 bg-gray-100/85 rounded drop-shadow-sm '>
     <div className='h-full flex gap-2 items-center  w-[200px]'>
     <div className='text-white font-bold  rounded-full px-[7px] py-[2px] text-sm bg-gray-400 flex items-center justify-center '>
      <h1 className=''>{index}</h1>
     </div>
        
            <div className=''>
            <img src={image} className='h-[60px] w-[60px]  object-cover' alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <h1 className='text-gray-500 '>${price}</h1>
            </div>
     </div>
     <div>
            <div className='flex gap-1 items-center'>
                <span onClick={()=>updateQuantity(id ,-1)} className='bg-gray-400/25 px-2 cursor-pointer rounded-full text-lg'>-</span>
                <span className='text-lg'>{quantity}</span>
                <span onClick={()=>updateQuantity(id , 1)}  className='bg-gray-400/25 cursor-pointer px-2 rounded-full text-lg'>+</span>
            </div>

     </div>
     <div onClick={()=>RemoveFromCarte(id) } className=''>
     <i className="ri-delete-bin-7-line text-xl text-red-500  cursor-pointer"></i>
     </div>
    </article>
  )
}

export default CartCard
