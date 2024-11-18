import express from 'express';
import {
    PaymentController,
    checkoutSession
} from '../controllers/payment.controller.js';
import {protectedRoute} from '../middleware/auth.middleware.js'
const router = express.Router();

router.post('/payment-process' , protectedRoute , PaymentController)
router.post('/check-out-session' , protectedRoute , checkoutSession)




export default router ; 
