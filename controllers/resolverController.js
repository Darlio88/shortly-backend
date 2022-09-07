import { response } from "express"
import {Url} from "../models/url.js"

export const resolver = async (req, res)=>{
try {
const {id} = req.params
const targetUrl = await Url.findOne({urlId:id})
if(!targetUrl) return res.status(404).send("the url does not exist on our server")
targetUrl.clicks++
await targetUrl.save()
res.redirect(targetUrl.longUrl)
} catch (error) {
   res.status(505).send("server error"+error.message) 
}
}