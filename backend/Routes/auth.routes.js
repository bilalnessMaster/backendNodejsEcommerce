import express from 'express';
import dotenv from 'dotenv'
import {
    authRegister, 
    authLogin, 
    authLogout, 
    getProfile, 
    getAllUsers, 
    deleteUser, 
    updateUserRole, 
    editProfile,

} from '../controllers/auth.controller.js'
import { protectedRoute ,adminRoute} from '../middleware/auth.middleware.js';
const router = express.Router();



router.post('/register', authRegister)
router.post('/login', authLogin)
router.post('/logout',protectedRoute, authLogout)
router.get('/profile',protectedRoute, getProfile)
router.delete('/users/:id',protectedRoute , adminRoute, deleteUser)
router.get('/users',protectedRoute , adminRoute, getAllUsers)
router.put('/users/:id',protectedRoute , adminRoute, updateUserRole)
router.put('/edit-profile', protectedRoute , editProfile)




export default router;