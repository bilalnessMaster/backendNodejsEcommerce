import cloudinary from '../lib/cloudinary/cloudinary.js'
import User from '../lib/models/user.model.js'
import jwt from 'jsonwebtoken'
// {
//     "firstName" : "bilal",
//     "lastName" :  "habib",
//     "email" : "bilal@gmail.com",
//     "password" : "bilal1234"

// }

//register endpoint

const createToken = (user, res) => {
    const  accessToken = jwt.sign({ userId  : user._id}, process.env.SECRET, {})
    return accessToken
}

export const authRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) return res.json({ error: "email already exist" })
        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        })
        await newUser.save()
        return res.json({ message: "account created succesfully" })
    } catch (error) {
        console.log('error while trying to create a user ' + error);
        return res.status(404).json({ message: "make sure to fill all the form" })
    }
}



// login endpoint


export const authLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        
        const user = await User.findOne({ email })
        if (!user) return res.status(404).json({ error: "email or password is worng" })
        const isMatch = await user.comparePassword(password)
        if (!isMatch) return res.status(404).json({ error: "email or password is worng" })
        const accessToken = createToken(user._id, res )

        const obj = user.toObject();
        delete obj.password
        return res.cookie('accessToken', accessToken ).json({ message: "login succesfully" , user : obj })
    } catch (error) {
        console.log('error occured while handle the login ' + error);
        return res.status(404).json({ error: "internal error server" })
    }
}

// logout endpoint


export const authLogout = async (req, res) => {
    try {
        const { accessToken } = req.cookies
        try {
            jwt.verify(accessToken, process.env.SECRET, (error, info) => {
                if (error) throw error
                res.clearCookie('accessToken');
            })
        } catch (error) {
            console.log('Error during logout:' + error);

        }
        return res.status(200).json({ message: "logout succesfully" })
    } catch (error) {
        console.error('Error during logout:', error);
        return res.status(500).json({ message: 'Logout failed' });
    }
}


// get profile  endpoint

export const getProfile = async (req, res) => {
    try {
        const { accessToken } = req.cookies
        
    
        
        return res.status(200).json({user : req.user})


    } catch (error) {
        console.log('Error occurred while getting the profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// delete users only for admins

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        // 671d1abefd7aa02ee23031a9
        const user = await User.findByIdAndDelete(id)
        if (!user) return res.status(404).json({ message: "user not found" })
        const users = await User.find({}, 'id email role firstName createdAt')
        return res.status(200).json({ message: "user deleted succesfully" , users})
    } catch (error) {
        console.log('Error occurred while deleteUser the profile:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

// get all users we will use it for display the users and update them 

export const getAllUsers = async (req, res) => {
    try {
        const {limit = 8 , page=1 } = req.query
        let skip = (page-1)*limit
        const totalUser = await User.countDocuments()
        const totalPage = Math.ceil(totalUser/limit)
        const users = await User.find({}, 'id email role firstName createdAt').skip(skip).limit(limit).sort({createdAt : -1})
        res.status(200).json({ users , totalUser , totalPage  })
    } catch (error) {
        console.log("error happend while getting all users" + error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


// update role user only for admins

export const updateUserRole = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body
        const user = await User.findById(id)
        user.role = role
        await user.save()
        const users = await User.find({}, 'id email role firstName createdAt')
        return res.status(200).json({ message: "user update succesfully" , users })

    } catch (error) {
        console.log("error happend while updateUserRole " + error);
        res.status(500).json({ error: 'Internal server error' });
    }

}

// update user profile 


export const editProfile = async (req, res) => {
    try {
        const { firstName, lastName, bio, profileImage, profession  } = req.body
        
        let cloudinaryResponse = null
        if(profileImage) { 
                cloudinaryResponse = await cloudinary.uploader.upload(profileImage , {
                    folder : 'users'
                })
        }
        
        if (!req.user._id) return res.status(404).json({ message: "Id is required" })
        const user = await User.findByIdAndUpdate(req.user._id, { 
        firstName,
        lastName,
        bio,
        profileImage : cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : '', 
        profession  })
        if (!user) return res.status(404).json({ message: "user not found" })
        return res.status(200).json({ message: "edited ! " })
    } catch (error) {
        console.log("error happend while editProfile " + error);
        res.status(500).json({ error: 'Internal server error' });

    }
}
// {
//     "userId" : "671d2438ac796d3125dd7b17",
//     "firstName" : "uwu" ,
//     "lastName" :  "uwu" ,
//      "profileImage" : "localhost//uwu",
//     "bio" : "i ama uwu guy i never imagine this happend" ,
//     "profession" : "uwu worker"
// }

// export const 