import express from 'express';
import { adminRoute, protectedRoute } from '../middleware/auth.middleware.js';
import {
    changeStatus, 
    getAllOrders,
} from '../controllers/order.controller.js';
const router = express.Router();

router.get('/',protectedRoute , adminRoute , getAllOrders)
router.put('/',protectedRoute , adminRoute ,changeStatus )


export default router;