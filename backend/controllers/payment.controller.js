import Order from "../lib/models/Order.model.js";
import {stripe} from '../lib/stripe/stripe.js'


export const PaymentController = async (req , res) =>{
    try{
        const {cartItems }= req.body
        if(!Array.isArray(cartItems) || cartItems.length === 0 ){
            return res.status(400).json({message : "products are required"})
        } 
        let totalAmount = 0 ; 
        const lineItems = cartItems.map(product => { 
            const amount = Math.round(product.price * 100)
            totalAmount += amount*product.quantity
            return { 
                price_data :  {
                    currency  : "usd" , 
                    product_data : {
                        name : product.name,
                        images  : [product.imageURL]
                    },
                    unit_amount : amount
                }
                ,quantity : product.quantity || 1 ,
            }
        });

        const session = await stripe.checkout.sessions.create({
                    payment_method_types : ['card',],
                    line_items : lineItems,
                    mode : 'payment',
                    success_url : `${process.env.CLIENT_URL}/purchase-success?session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url : `${process.env.CLIENT_URL}/purchase-cancel`,
                    metadata : {
                        userId : req.user._id.toString(),
                        products : JSON.stringify(cartItems.map((product)=>{
                            return {
                                id : product._id,
                                quantity : product.quantity, 
                                price : product.price,
                                name : product.name, 
                            }
                        }) )
                    }
        })

        res.status(200).json({message : 'created payment session' , session_id : session.id , totalAmount : totalAmount/100})

    }catch(error){
        console.log("error happend while creating session"+error);
        
    }
}


export const checkoutSession = async (req ,  res) => { 
    try{
        const{session_id} = req.body
 
        
        const session  = await stripe.checkout.sessions.retrieve(session_id)

        if(session.payment_status === 'paid'){ 
            const products = JSON.parse(session.metadata.products)
            const order  = new Order({
                    userId  : session.metadata.userId, 
                    products : products.map((product =>({ 
                        productId : product.id ,
                        quantity : product.quantity,
                    }))),
                    totalPrice : session.amount_total/100,
                    paymentIntent : session.payment_intent,
                    sessionId :session_id,
            }) 
            await order.save();
            req.user.cartItems = []
            await req.user.save()
            res.status(200).json({message : "order created successfully" , succes : true , order: order})

        }

    }catch(error){
        console.log("error happend while checking if the payment has been paid "+error);
    }
}