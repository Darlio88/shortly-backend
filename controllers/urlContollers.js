import {Url} from "../models/url.js"
import { nanoid } from "nanoid"
import { urlValidator } from "../utils/urlValidator.js"


export const createShortUrl = async (req, res)=>{
try {
    const {url,createdBy} = req.body
    console.log(url)
    const urlCheck = await Url.findOne({longUrl:url})
    if(urlCheck){
       return res.status(200).json(urlCheck)
    }
  if(urlValidator(url)){
        const urlId= nanoid()
        const shortUrl = `${process.env.BASE_URL}/${urlId}`
        const newUrl = new Url({longUrl:url,urlId:urlId, shortUrl:shortUrl,createdBy:createdBy?createdBy:null, createdAt:new Date()})
        await newUrl.save()
        res.status(200).json(newUrl)
  } else{
    res.status(404).json("invalid url")
  }

} catch (error) {
    console.log(error)
   res.status(500).send(error) 
}
}

export const getUserUrls = async(req, res)=>{
 try {
  const {id} = req.params
  const allNotes = await Url.find({createdBy:id})
  console.log(allNotes)
  res.status(200).send(allNotes)
 } catch (error) {
  
 }
}

