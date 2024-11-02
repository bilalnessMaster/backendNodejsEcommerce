import mongoose from 'mongoose';

const Schema = mongoose.Schema 

const  ProductSchema = new Schema({
    name : {
        type : String , 
        required : true 
    },
    category : {
        type : String ,
        required : true
    },
    imageURL : {
        type : String , 
        required : true,
    
    }, 
    oldPrice :Number , 
    price: { 
        type : Number , 
        required : true,

    },
    color : String , 
    rating : {
        type : Number ,
        default : 0
    }, 
    description : {
        type : String, 
        required: true
    }, 
    trend : {
        type : Boolean , 
        default  : false
    }


}, { timestamps: true })



const Product = mongoose.model('Product' , ProductSchema)

export default Product;

