import React from 'react'

const RattingSystem = ({rating}) => {
        const star = []
        for (let i = 0; i <=5; i++) {
                star.push(
                    i <= rating ? <i className="ri-star-fill text-yellow-500"></i> : <i className="ri-star-line text-yellow-500"></i>
                )

        }
  return (
    <div>
      {
        star.map((item , index) => <span key={index}>{item}</span>)
          
      }
          
      
    </div>
  )
}

export default RattingSystem
