import mongoose from 'mongoose';

const Schema  = mongoose.Schema


const reviewSchema = new Schema({
    comment : {
        type: String , 
        required : true 
    },
    rating : {
        type : Number, 
        required : true
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    productId : { 
        type : mongoose.Schema.Types.ObjectId, 
        ref : 'Product'
    }
}, {timestamps : true})


const Review = mongoose.model('Review' , reviewSchema)


export default Review;