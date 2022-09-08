import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName:String,
    email:{type:String, required:true},
    passwordHash:String,
});



export const ShortlyUser = mongoose.model('ShortlyUser',userSchema);



