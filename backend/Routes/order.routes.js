import express from 'express';
import { adminRoute, protectedRoute } from '../middleware/auth.middleware.js';
import {
    changeStatus, 
    getAllOrders,
    getSingle
} from '../controllers/order.controller.js';
const router = express.Router();

router.get('/',protectedRoute , adminRoute , getAllOrders)
router.put('/',protectedRoute , adminRoute ,changeStatus )
router.get('/singleOrder/:id',protectedRoute  ,getSingle )


export default router;