import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'the first name is required'],
        min: 3,
    },
    lastName: {
        type: String,
        required: [true, 'the last name is required'],
        min: 3,
    },
    email: {
        type: String,
        required: [true, 'the email is required'],
        unique: true,
        min: 6,
    },
    password: {
        type: String,
        required: [true, 'the email is required'],
        unique: true,
        min: 6,
    },
    role: {
        type: String,
        default: 'customer'
    },
    profileImage: String,
    bio: {
        type: String,
        maxlength: 200
    },
    profession: String,
    cartItems: [
        {
            quantity: {
                type: Number,
                default: 1
            },
            product: { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product' }
        }
    ]

}, { timestamps: true })
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) next()
        const salt = await bcrypt.genSalt(16)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch (error) {
        next(error);
        console.log("Error related to password hashing: " + error);

    }
})
userSchema.methods.comparePassword = async function (pwd) {
    return await bcrypt.compare(pwd, this.password)

}
const User = mongoose.model('User', userSchema)



export default User;