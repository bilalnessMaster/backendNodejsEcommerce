import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
const db = () => {
    try {

        mongoose.connect(process.env.URL_TO_MONGODB).then(() => console.log("connect succesfully"))


    } catch (error) {
        console.log("error occured while trying  to connect to database mongodb");

    }
}

export default db;