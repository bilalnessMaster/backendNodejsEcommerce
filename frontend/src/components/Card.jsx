import React from 'react'
import { Link } from 'react-router-dom'
import RattingSystem from './RattingSystem'
import { useCarteStore } from '../Stores/useCarteStore'
const Card = ({_id, imageURL , rating , price  ,name , oldPrice}) => {
  const {addToCart} = useCarteStore()
  return (
    <article className='relative'>
    
    <Link to={`/product/${_id}`} className='relative '>
      <div>
        <img src={imageURL} alt=""  className='w-full h-64 max-h-96 object-cover'/>
      </div>
      <div className='flex justify-between items-start py-1 '>
        <div>
            <p className='font-play font-bold'>{name}</p>
           <RattingSystem rating={rating}/>
        </div>
        <p className='font-medium'>{oldPrice ? <span className='line-through text-gray-600/65'>${oldPrice}</span> : null} ${price}  </p>
      </div>
      
    </Link>
    <button onClick={()=>addToCart(_id)} className='absolute top-2 right-2 '>
        <i className="ri-shopping-cart-line text-xl bg-red-500 p-1 rounded-md text-white "></i>
      </button>
    </article>

  )
}

export default Card