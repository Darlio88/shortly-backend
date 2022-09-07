import Express from "express";

import {createShortUrl} from "../controllers/urlContollers.js"

const routes = Express.Router()


routes.post('/create-short-url', createShortUrl)

export default routes