import jwt from 'jsonwebtoken'
import User from '../lib/models/user.model.js'


export const protectedRoute = async (req , res , next) => { 
    try { 
            const {accessToken} = req.cookies 
            if(!accessToken) return res.status(401).json({message : 'you are not authorize'})
            jwt.verify(accessToken , process.env.SECRET ,async (error , info)=>{
                    if(error) throw error
                    const user = await User.findOne({_id : info.userId})
                    if (!user) return res.status(404).json({ error: 'User not found' });
                    req.user = user
                    next()
            })
    }catch(error){
            console.log("error happend while to verfiy the token" +error);
            res.status(500).json({ error: 'Internal server error' });
    }
}


// acces only for admins

export const adminRoute = async (req, res , next) => { 
    try{
        if(req.user && req.user.role === 'admin') {
            next()
        }else{
            return res.status(404).json({message : 'you are not authorize'})
        }


    }catch(error){
        console.log("error happend in admin route" +error);
            res.status(500).json({ error: 'Internal server error' });
    }
}