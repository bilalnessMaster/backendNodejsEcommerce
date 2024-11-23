import Review from "../lib/models/Review.model.js";

export const createReview = async (req , res) => { 
    try{
        const {comment, rating, productId} = req.body

        const userId=req.user._id        
        const review = await Review.create({
            comment, 
            userId,
            rating,
            productId
        })
  
        const reviews = await Review.find({productId}).populate('userId' ,["email" , "firstName" , "profileImage"] )
        res.status(200).json({message: "created successfully" , reviews})
        }catch(error){
        console.log('the error happend while creating a review '+ error);
        
    }
}

export const getReview = async (req , res) => { 
    try{
        const {id} = req.params
        const reviews = await Review.find({ productId : id}).populate('userId' ,["email" , "firstName" , "profileImage"])
        res.status(200).json({reviews})
    }catch(error){
        console.log("error happend while getting a reviews "+error);
        
    }
}

export const deteleReview = async (req , res) => { 
    try{
        const {id} = req.params
        const del = await Review.findByIdAndDelete(id)
        const reviews = await Review.find({ productId : del.productId}).populate('userId' ,["email" , "firstName" , "profileImage"])
        res.status(200).json({reviews})
    }catch(error){
        console.log("error happend while DELETING a reviews "+error);
        
    }
}
