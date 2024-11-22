

const AddReview = ({productId}) => {
  return (
    <div className="flex justify-end py-2">
        <button className="bg-green-400 px-2 py-2 rounded-md text-green-900 font-medium">Add review</button>
        <div className="bg-black/15 h-screen w-full fixed  inset-0 z-50 flex justify-center items-center">
            <div className="relative bg-white px-3 py-4 space-y-2 rounded-md flex-col flex justify-start">
                <h1 className="font-play ">leave a nice comment</h1>
                <h1>rating system </h1>
                <textarea className="w-64 rounded-md border outline-none px-1 py-1" name="comment" id=""></textarea>
                <div className="absolute cursor-pointer top-2 right-2">
                <i className="ri-close-line xl"></i>
                </div>
                <button className="w-fit font-medium bg-gray-200 px-2 py-2 rounded-md">Submit</button>
            </div>
           
        </div>
       
    </div>
  )
}
export default AddReview;
