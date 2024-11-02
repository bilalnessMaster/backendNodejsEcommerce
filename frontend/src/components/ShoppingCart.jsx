import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import products from '../data/products.json'
import { useCarteStore } from '../Stores/useCarteStore'
import CartCard from './CartCard'
import OrderSummary from './OrderSummary'
const ShoppingCart = ({isOpen , setIsOpen}) => {
    const [items , setItems] = useState([])
    const {cartItems , Cartshoping} = useCarteStore()
    

    if (!items) {
        return <div>Loading...</div>;
    }
   
    useEffect(()=>{
        
  
        
       
        setItems(cartItems)

        
        
    },[cartItems])
    

  return (
    <motion.div 
    initial={{
        x:900
    }}
    animate={{
        x: 0 , 
        transition : {
            ease : [1, 0, 0, 1]
        }
    }}    
    
    className=" fixed top-0 right-0 border overflow-auto px-3 drop-shadow-lg py-2 z-50 w-[80%] md:w-1/2 lg:w-1/3 h-screen rounded-md bg-white space-y-9">
            
            <div className='flex justify-between items-center text-xl'>
                <h1 className='font-semibold  first-letter:capitalize'>your shopping cart  </h1>
                <i onClick={()=>setIsOpen(!isOpen)} className="ri-close-fill bg-black px-1  cursor-pointer text-white"></i>
            </div>
            <div className='flex flex-col gap-2'>

        {items.length > 0 ?
            items.map((ele,index) => (
                <CartCard key={ele.id} index={index} {...ele} />
            )) : <div className='w-full h-[500px] flex flex-col items-center justify-center'>
             <i className="ri-shopping-bag-line text-xl"></i>   
                 <span>Cart is empty</span>
             </div>
            
        }

            </div>
            {
                cartItems.length > 0 && <OrderSummary />
            }

    </motion.div>
  )
}

export default ShoppingCart
