import Product from "../lib/models/Product.model.js";


// add product to cart items

export const addProduct = async (req, res) => {
    try {
        const { id } = req.body
        let item = req.user.cartItems.find(item => item.id === id)
        if (!item) {
            req.user.cartItems.push(id)
            await req.user.save()
        } else {
            item.quantity += 1
            await req.user.save()

        }
        res.status(200).json({ message: "added successfully" })
    } catch (error) {
        console.log('error ocurred while add product to cartitems ' + error);
        res.status(404).json({ error: "internal error in server" })
    }
}

// get all  cart's items

export const getCartitems = async (req, res) => {
    try {
        let totalprice = 0 
        const products = await Product.find({ _id: { $in: req.user.cartItems } })
        const items = req.user.cartItems.map(item => {
            const product = products.find(pro => pro.id === item.id)
            totalprice += product.price * item.quantity
            return { ...product._doc, quantity: item.quantity }
        })
        if (!items) return res.status(404).json({ error: "something wrong" })
        res.status(200).json({ message: "cart items", items  , totalprice})
    } catch (error) {
        console.log('error ocurred while getting items to cartitems ' + error);

    }
}

// delete cart items

export const DeleteCartItems = async (req, res) => {
    try {
        const { id } = req.params

        req.user.cartItems = req.user.cartItems.filter(item => item.id !== id)
        await req.user.save()
        return res.status(200).json({ message: "delete succesfully" })
    } catch (error) {
        console.log('error ocurred while deleting items to cartitems ' + error);

    }
}

// update quantity cart items  

export const updateQuantity = async (req, res) => {
    try {
        const { id, quantity } = req.body
        const item = req.user.cartItems.find(ele => ele.id === id)
        if (!item) return res.status(404).json({ error: "something wrong" })
        if (item.quantity + quantity <= 0) {
            req.user.cartItems = req.user.cartItems.filter(item => item.id !== id)
            await req.user.save()
        } else {
            item.quantity += quantity;
            await req.user.save()
        }
        return res.status(200).json({ message: "updated succesfully" })
    } catch (error) {
        console.log(' does not exist in cart items ' + error);
    }
}

