import Express from "express"

import {createUser, loginUser} from "../controllers/userController.js"


const route = Express.Router()



route.post("/create-user", createUser)

route.post("/login-user", loginUser)

// route.patch("/update-user/:id", updateUser)

// route.delete("/delete-user/:id", deleteUser)

export default route
