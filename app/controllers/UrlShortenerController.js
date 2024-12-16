import * as UrlShortenerService from "../services/UrlShortenerService.js";

export const createShortenerURL =async (req,res)=>{
    try{
        let {originalUrl} = req.body;

        if(!originalUrl){
            return res.status(400).json({message:"Please provide an original URL"});
        }
        const result = await UrlShortenerService.createShortenerURL(originalUrl);

        res.status(200).json({data:result ,message: "Shortener URL created successfully"});

    }catch(e){
        return res.status(500).json({message:e.message});
    }
}