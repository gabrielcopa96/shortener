// import { Router } from 'express'
import { Router } from "express";
import { createShortUrl, getShortUrl } from "../controllers/shortUrl.controller";

const router = Router();

router
    .get('/:codeUrl', getShortUrl)
    .post('/', createShortUrl)


export default router;