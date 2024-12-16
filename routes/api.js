import express from 'express';
const router = express.Router();
import * as UrlShortenerController from "../app/controllers/UrlShortenerController.js";

//Users
router.post("/SHORTENER_BASE_URL",UrlShortenerController.createShortenerURL);
// router.get("/get-url/:code",UrlShortenerController.redirectOriginalURL);

export default router;