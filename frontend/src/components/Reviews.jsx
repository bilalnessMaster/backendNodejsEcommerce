import { useEffect } from "react"
import { useReviewStore } from "../Stores/useReviewStore"
import Review from "./Review";
import AddReview from "./AddReview";


const Reviews = ({productId}) => {
    const {getReviews , Reviewss} = useReviewStore();
    useEffect(()=>{

      getReviews(productId)

    },[getReviews])
  return (
    <div className="">
      <div className="space-y-3">
        {
          Reviewss.length <= 0 && <div className="text-center font-play font-medium">Be the first comment...</div>
        }
        {
           Reviewss.length > 0 && Reviewss.map((rev)=>(
            <Review key={rev._id} {...rev} />
           )) 
        }
      </div>
      <div className="">
          <AddReview productId={productId} />
      </div>
    </div>
  )
}

export default Reviews