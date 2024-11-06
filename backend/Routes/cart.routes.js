import express from 'express';
import { protectedRoute } from '../middleware/auth.middleware.js';
import { 
    addProduct,
    getCartitems,
    DeleteCartItems,
    updateQuantity,
 } from '../controllers/cart.controller.js';
const router  = express.Router();



router.put('/' , protectedRoute , addProduct)
router.get('/' , protectedRoute , getCartitems)
router.delete('/:id' , protectedRoute , DeleteCartItems)
router.patch('/' , protectedRoute , updateQuantity)




export default router
