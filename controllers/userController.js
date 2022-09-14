import {ShortlyUser as User} from '../models/user.js'
import bcrypt from 'bcryptjs'



export const createUser = async(req, res) =>{
   try {
    const { firstName, lastName, email,password,} = req.body;
    const userCheck = await User.findOne({email:email})
    if(userCheck) return res.status(404).send("user already exists")
    const passwordHash = await bcrypt.hash(password, 12)
    const newUser = new User({email,firstName, lastName, passwordHash})
    await newUser.save()
    res.status(200).send(newUser)
   } catch (err) {
    console.log(err)
    res.status(500).send("server error"+ err.message)
   }
}


   export const loginUser = async(req, res) =>{
    try {
     const {email,password} = req.body;
     const validatedUser = await User.findOne({email:email})
     if(!validatedUser) return res.status(404).send("User doesn't exists")


     const correctPassword = bcrypt.compareSync(password, validatedUser.passwordHash)
     if(!correctPassword) return res.status(404).send("the password is incorrect")
     
     res.status(200).send(validatedUser)
     
    } catch (err) {
     console.log(err)
     res.status(500).send("server error"+ err.message)
    }
 
}

// export const updateUser = async (req, res) =>{
//     try {
//         const {id} = req.params
//         await User.updateOne({_id:id},{...req.body})
//         res.status(200).send("user updated")
         
//     } catch (err) {
//         res.status(500).send("server error"+ err.message)
//     }
// }


// export const deleteUser = async(req, res) =>{
//     try {
//         const {id} = req.params
//         await User.findOneAndDelete({_id:id})
//         res.status(200).send("User succesffully deleted")
//     } catch (err) {
//         res.status(500).send("server error"+ err.message)   
//     }
// }