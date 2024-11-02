import Product from "../lib/models/Product.model.js";
import cloudinary  from "../lib/cloudinary/cloudinary.js";
import Review  from '../lib/models/Review.model.js'
export const getAllProducts = async (req, res) => {
    try {
        const { category, color, minPrice, maxPrice, page = 1 , limit = 10 } = req.query
     
        const filter = {}
        if (category && category !== 'all') {
            filter.category = category
        }
        if (color && color !== 'all') {
            filter.color = color
        }
        if (minPrice && maxPrice) {
            const min = parseFloat(minPrice)
            const max = parseFloat(maxPrice)
            if (!isNaN(min) && !isNaN(max)) {
                filter.price = { $gte: min, $lte: max }
            }
        }
        let skip = (page - 1) * limit

        const totaleProducts = await Product.countDocuments(filter)
        const totalePage = Math.ceil(totaleProducts/parseInt(limit))
        const productsfilter = await Product.find(filter).skip(skip).limit(parseInt(limit)).sort({createdAt : -1})

        res.status(200).json({products : productsfilter , totalePage : totalePage , totaleProducts :totaleProducts })
    } catch (error) {
        console.log('while getting all product', error);
        res.status(404).json({ error: "internal error in server" })
    }
}

// create products 

export const createProduct = async (req, res) => {
    try {
        let cloudinaryResponse = null
        const { name, category, oldPrice, price, imageURL, color, description } = req.body
        
        if(imageURL) { 
            cloudinaryResponse = await cloudinary.uploader.upload(imageURL, {
                folder: "products",
              })
        }

        const product = await Product.create({
            name,
            category,
            oldPrice,
            price,
            imageURL: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : '',
            color,
            description
        })
        if (!product) return res.status(404).json({ error: "error while creating products" })
        res.status(200).json({ message: "product has been created !!" })

    } catch (error) {
        console.log('while creating product', error);
        res.status(404).json({ error: error.message })
    }
}

// delete product base on id still not adding image

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        let imgurl = product.imageURL.split('/').pop().split('.')[0]
        if (!product) return res.status(404).json({ error: "product doesnt exist " })
        res.status(200).json({ message: "product has been deleted !!" })
    } catch (error) {
        console.log('while delete product', error);
        res.status(404).json({ error: "internal error in server" })



    }
}

// get  single product 

export const getSingleProduct = async (req , res) => {
    try{
        const {id} = req.params 
        const product = await Product.findById(id)
        const review = await Review.find({productId : id}).populate('userId' , ['firstName' , 'profileImage'])
        if(!product) return res.status(404).json({error : 'product not found'})
        return res.status(200).json({message : 'product found' , product : product, reviews : review})


    }catch(error){
        console.log('while getSingleProduct product', error);
        res.status(404).json({ error: "internal error in server" })
    }
}


// related products from

export const  relatedProducts = async (req ,res) =>{
    try  {
            const {id} = req.params
            const product = await Product.findById(id)
            if(!product) return res.status(404).json({error : "product not found"})
            let titleReg = new RegExp(product.name.split(' ').filter(word => word.length > 1).join('|'))
            const products = await Product.find({
                _id : {
                    $ne : id
                }, 
                $or : [
                    {name : {$regex : titleReg}}, 
                    {category : product.category}
                ]
            })    
            res.status(200).json({relatedProducts : products})
        }catch(error){
        console.log('while getting related products ', error);
        res.status(404).json({ error: "internal error in server" })
    }
}


