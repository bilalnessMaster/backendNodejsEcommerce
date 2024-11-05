import Product from "../lib/models/Product.model.js";




export const addProduct = async (req, res) => {
    try {
        const { id } = req.body
        console.log(req.user.cartItems);

        let item = req.user.cartItems.find(item => item.id === id)
        if (!item) {
            req.user.cartItems.push(id)
            await req.user.save()
        } else {
            item.quantity += 1
            await req.user.save()

        }
        res.status(200).json({message : "added successfully" })
    } catch (error) {
        console.log('error ocurred while add product to cartitems ' + error);
        res.status(404).json({ error: "internal error in server" })
    }
}

export const getCartitems = async (req , res)=> { 
    try{

        const products = await Product.find({_id : {$in : req.user.cartItems}} )
        const items = req.user.cartItems.map(item => {
            const product  = products.find(pro => pro.id === item.id)
            return { ...product._doc , quantity : item.quantity}
        })
        if(!items) return res.status(404).json({error : "something wrong"})
        res.status(200).json({message : "cart items" , items})
    }catch(error){
        console.log('error ocurred while getting items to cartitems ' + error);

    }
}