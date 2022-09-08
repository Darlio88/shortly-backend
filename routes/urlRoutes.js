import Express from "express";

import {createShortUrl, getUserUrls} from "../controllers/urlContollers.js"

const routes = Express.Router()


routes.post('/create-short-url', createShortUrl)


routes.get('/get-urls/:id', getUserUrls)

export default routes