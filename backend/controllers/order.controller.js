import Order from "../lib/models/Order.model.js"
import Product from '../lib/models/Product.model.js'

export const getAllOrders = async (req , res) => {
    try {
        const {page=1 , limit = 6} = req.query
        let skip = (page-1)*limit
        const totalPage= await Order.countDocuments()
        const pages = Math.ceil(totalPage/limit)
        const revenue = await Order.aggregate([
            {
                $group :  {
                    _id : null , 
                    totalSum  : {$sum  : 1},
                    totalRevenue : {$sum : "$totalPrice"}
                }
            }
        ])
        const orders = await Order.find().populate('userId' , ['firstName' , 'email', 'profileImage']).skip(skip).sort({createdAt : -1}).limit(limit)
        res.status(200).json({orders : orders , revenue:  revenue[0]  , pages})

    }catch(error){
        console.log('error happend while fetching ordres ' + error);
        
    }
}

export const changeStatus = async (req , res ) => {
    try {
            const {id , page=1 , status} = req.body
            const order = await Order.findById(id)
            if(!order) return res.status(403).json({error : 'order not found'})
            order.status = status
            await order.save()
            return res.status(200).json({ message : 'order state has been change'})
    }catch(error){
      console.log('error happend while change status '+error);
      
    }
}

export const getSingle = async (req ,res) => { 
    try {
        const {id} = req.params
        const order = await Order.findById(id)
        if(!order) return res.status(403).json({message : 'order not found', order})
        const products = await Product.find({_id :{$in :order.products } })
        
        const items = products.map(product => {
            const detail = order.products.find(item => item._id == product.id ) 
            return {quantity: detail.quantity , ...product._doc}
         
        })
        
        return res.status(200).json({order , items : items})    
    } catch (error) {
        console.log('error happend while getting single order '+error);
    }
}