import { useEffect, useState } from "react";
import { useUserStore } from "../Stores/useUserStore";
import Rating from "./Rating";
import { useReviewStore } from "../Stores/useReviewStore";

const AddReview = ({productId}) => {
  const [open , setOpen ] = useState(false)
  const { user ,getProfile} = useUserStore()
  const {addReview} = useReviewStore()
  const [rating , setRating] = useState(2)
  const [dataform , setDataform] = useState({
    comment : '',
    rating : 1, 
    userId : user?._id,
    productId : productId
  })

  useEffect(()=>{
    setDataform({
     ...dataform , rating : rating 
    })
  },[rating])

  const handleSumbit = async () => { 
    addReview(dataform)
    setOpen(!open)
  }
  return (
    <div className="flex justify-end py-2">
        <button disabled={user ? false : true} onClick={()=>setOpen(!open)}  className="bg-green-400 px-2 py-2 rounded-md text-green-900 font-medium">Add review</button>
        {open &&
        
        <div className="bg-black/15 h-screen w-full fixed  inset-0 z-50 flex justify-center items-center">
            <div className="relative bg-white px-3 py-4 space-y-2 rounded-md flex-col flex justify-start">
                <h1 className="font-play ">leave a nice comment</h1>
                <div>
                  <Rating rating={rating}  setRating={setRating}/>
                </div>
                <textarea className="w-64 rounded-md border outline-none px-1 py-1" value={dataform.comment} onChange={(e)=>setDataform({...dataform , comment : e.target.value})} name="comment" id=""></textarea>
                <div onClick={()=>setOpen(!open)} className="absolute cursor-pointer top-2 right-2">
                <i className="ri-close-line xl"></i>
                </div>
                <button onClick={handleSumbit} className="w-fit font-medium bg-gray-200 px-2 py-2 rounded-md">Submit</button>
            </div>
        </div>
        }
           
       
    </div>
  )
}
export default AddReview;
