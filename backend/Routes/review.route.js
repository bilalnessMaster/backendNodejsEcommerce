import express from 'express';
import { protectedRoute } from '../middleware/auth.middleware.js';
import { 
    createReview,
    deteleReview,
    getReview 
} from '../controllers/review.controller.js';
const route = express.Router();

route.post('/', protectedRoute, createReview)
route.get('/:id', getReview)
route.delete('/:id', deteleReview)


export default route;