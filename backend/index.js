import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import db from './lib/database/db.js'
import cors from 'cors'
import authRouter from './Routes/auth.routes.js'
import ProductRoute  from './Routes/products.routes.js'
import CartRoute  from './Routes/cart.routes.js'

dotenv.config()
const app = express();
app.use(express.json({ limit: "25mb" }))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())
const port = process.env.PORT || 5002




// router for authentication and authorisation
app.use('/api/auth', authRouter)
app.use('/api/products' , ProductRoute)
app.use('/api/cart' , CartRoute)




app.listen(port, () => {
    console.log('starting successfully', port);
    db()
})
