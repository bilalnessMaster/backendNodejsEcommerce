import mongoose     from 'mongoose';

const Schema = mongoose.Schema 

const OrderSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId , ref :"User"
    },
    products : [
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId , ref :'Product'
            },
            quantity : {
                type : Number
            },
        }
    ] ,
    totalPrice : Number ,
    paymentIntent : String , 
    sessionId : String ,
    status : {
        type : String ,
        default : "Ordred"
    }
}, {timestamps : true})


const Order  = mongoose.model('Order' , OrderSchema)


export default Order;