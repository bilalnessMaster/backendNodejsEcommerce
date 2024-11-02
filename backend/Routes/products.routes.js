import express from 'express';
const router = express.Router();
import { protectedRoute ,adminRoute} from '../middleware/auth.middleware.js';
import { 
    createProduct, 
    getAllProducts,
    deleteProduct,
    getSingleProduct,
    relatedProducts,

} from '../controllers/products.controller.js';


router.get('/', getAllProducts )
router.post('/',protectedRoute, adminRoute, createProduct)
router.delete('/:id',protectedRoute, adminRoute, deleteProduct)
router.get('/:id', getSingleProduct)
router.get('/related-products/:id', relatedProducts)



export default router; 