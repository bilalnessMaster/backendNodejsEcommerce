import React from 'react'
import RattingSystem from './RattingSystem'
import { useReviewStore } from '../Stores/useReviewStore'
import { useUserStore } from '../Stores/useUserStore'
const Review = ({comment , email , rating, userId, profileImage  ,_id }) => {
  const {deteleReview} = useReviewStore()
  const {user} = useUserStore()
  return (
    <div>
      <div className='inlin-flex bg-gray-50 border rounded-md py-2 px-2'>
        <div className='flex items-start justify-between gap-1 '>
          <div className='flex items-start gap-2'>
            <div className='h-10 w-10 rounded-full bg-gray-400'>
     
            <img src={userId?.profileImage}  className='h-full rounded-full' alt="" />  
          
          </div>
         <div>
         <div className='leading-5'>
              <h1>{userId?.firstName}</h1>
              <RattingSystem rating={rating}/>
          </div>
          <div className='max-w-md'>
            <p>{comment}</p>
          </div>
         </div>
          </div>
         <div>
          {
            user?.email == userId.email | user?.role == 'admin' ? <button onClick={()=> deteleReview(_id)}><i className="ri-delete-bin-line text-red-400"></i></button>
            : ''
          }
         </div>
        </div>
      </div>
    </div>
  )
}

export default Review