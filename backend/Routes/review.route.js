import express from 'express';
import { protectedRoute } from '../middleware/auth.middleware.js';
import { 
    createReview,
    getReview 
} from '../controllers/review.controller.js';
const route = express.Router();

route.post('/', protectedRoute, createReview)
route.get('/:id', protectedRoute, getReview)


export default route;