import express from 'express';
import { protectedRoute } from '../middleware/auth.middleware.js';
import { 
    addProduct,
    getCartitems,

 } from '../controllers/cart.controller.js';
const router  = express.Router();



router.put('/' , protectedRoute , addProduct)
router.get('/' , protectedRoute , getCartitems)




export default router
