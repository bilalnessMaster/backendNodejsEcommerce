import React from 'react'

const Review = ({comment , rating, userId, profileImage }) => {
  return (
    <div>
      <div className='inlin-flex bg-gray-50 border rounded-md py-2 px-2'>
        <div className='flex items-start gap-1 '>
          <div className='h-10 w-10 rounded-full bg-gray-400'>
          {profileImage ? 
            <img src={profileImage}  className='h-full rounded-full' alt="" />  
            : ''
          }
          </div>
         <div>
         <div className='leading-5'>
              <h1>{userId.firstName}</h1>
              <h1 className='text-black/25'>{userId.email}</h1>
          </div>
          <div className='max-w-md'>
            <p>{comment}</p>
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Review