import mongoose from "mongoose";

export default async function createDatabaseConnection(){
    try {
        mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       }
        ) 
        console.log("database is connected")
        
    } catch (error) {
        console.log(error)
    }
}
