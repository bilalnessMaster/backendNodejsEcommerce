import {v2 } from 'cloudinary' ; 
import dotenv from "dotenv"
dotenv.config()

export const cloudinary = v2.config({
    cloud_name : process.env.COULDINARY_NAME_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY , 
    api_secret:  process.env.CLOUDINARY_SECRET_KEY

})