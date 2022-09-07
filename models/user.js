import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email:String,
    passwordHash:String,
});



export const User = mongoose.model('User',userSchema);


