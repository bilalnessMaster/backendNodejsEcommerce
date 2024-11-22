import Review from "../lib/models/Review.model.js";

export const createReview = async (req , res) => { 
    try{
        const {comment, userId, rating, productId} = req.body
        console.log('begin' , userId);
        
        const review = await Review.create({
            comment, 
            userId,
            rating,
            productId
        })
        console.log('second');
        const reviews = await Review.find({productId})
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