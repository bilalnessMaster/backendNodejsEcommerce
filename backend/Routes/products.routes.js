import express from 'express';
const router = express.Router();
import { protectedRoute ,adminRoute} from '../middleware/auth.middleware.js';
import { 
    createProduct, 
    getAllProducts,
    deleteProduct,
    getSingleProduct,
    relatedProducts,
    trendingProducts,
    setProductTrend,
    searchEgine , 

} from '../controllers/products.controller.js';


router.get('/', getAllProducts )
router.post('/',protectedRoute, adminRoute, createProduct)
router.get('/search', searchEgine)
router.get('/trend', trendingProducts)
router.get('/related-products/:id', relatedProducts)
router.delete('/:id',protectedRoute, adminRoute, deleteProduct)
router.get('/:id', getSingleProduct)
router.put('/', protectedRoute, adminRoute, setProductTrend)

export default router; 