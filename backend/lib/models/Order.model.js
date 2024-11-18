import mongoose     from 'mongoose';

const Schema = mongoose.Schema 

const OrderSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId , ref :"user"
    },
    products : [
        {
            productId : {
                type : mongoose.Schema.Types.ObjectId , ref :'product'
            },
            quantity : {
                type : Number
            },
        }
    ] ,
    totalPrice : Number ,
    paymentIntent : String , 
    sessionId : String ,
}, {timestamps : true})


const Order  = mongoose.model('Order' , OrderSchema)


export default Order;