import  express  from "express";
import dotenv from "dotenv"
import cors from 'cors'


import Dbconnection from './config/index.js'
import routes from './routes/urlRoutes.js'
import urlResolver from './routes/urlResolver.js'
import userRoutes from "./routes/userRoutes.js"
dotenv.config()

const app = express()
const PORT =process.env.PORT || 5000
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/", urlResolver)
app.use("/api", routes)
app.use("/user", userRoutes)


Dbconnection()

app.listen(PORT, (err, res)=>{
    if(err) throw err
    console.log(`app is running on port ${PORT}`)
})

