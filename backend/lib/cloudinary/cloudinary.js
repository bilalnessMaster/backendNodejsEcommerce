import {v2 as cloudinary} from 'cloudinary' ; 
import dotenv from "dotenv"
dotenv.config()

cloudinary.config({
    cloud_name : process.env.COULDINARY_NAME_CLOUD,
    api_key: process.env.CLOUDINARY_API_KEY , 
    api_secret:  process.env.CLOUDINARY_SECRET_KEY

})
export default cloudinary;