import React from 'react'

const Rating = ({rating , setRating}) => {
  return (
    <div className='flex gap-1'>
        {
            Array.from({length:5} , (_ , index)=>{
                 if(index<rating){
                    return <i onClick={()=>setRating(index+1)} className="ri-star-fill"></i> 
                 }else{
                    return <i onClick={()=>setRating(index+1)} className="ri-star-line"></i> 
                 }
            })
        }
    </div>
  )
}

export default Rating