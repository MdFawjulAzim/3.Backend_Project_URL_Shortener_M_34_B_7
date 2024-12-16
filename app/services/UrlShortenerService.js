import shortid from "shortid";
import URLModel from "../model/URLModel.js";
import { SHORTENER_BASE_URL} from "../config/config.js";

export const createShortenerURL = async (originalUrl)=>{
    const shortenerBaseUrl = SHORTENER_BASE_URL;
    if(!shortenerBaseUrl){
        res.status(404).json({message: "Invalid shortener base original URL"});
    }

    const urlCode = shortid.generate();

    //check if the URL is Already in the database 
    let url = await URLModel.findOne({originalUrl});
    if(url){
        return url;
    }
    
    // If not ,Create a new short URL record in the database
    const shortUrl = `${shortenerBaseUrl}/${urlCode}`;

    let result = await URLModel.create({
        originalUrl,
        shortUrl,
        urlCode
    })

    return result;
}


export const redirectOriginalURL =async (urlCode)=>{
    let url = await URLModel.findOne({urlCode});
    if(!url){
        return res.status(404).json({message: "Invalid URL Code"});
    }
    return url;
}