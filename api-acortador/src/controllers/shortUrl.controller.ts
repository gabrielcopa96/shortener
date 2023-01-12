// const Urlshort = require('../models/Urlshort');
import { Request, Response } from "express";
import UrlShortModel from '../models/Urlshort';

const createShortUrl = async ({ body }: Request, res: Response) => {

   try {

      const { url } = body
      const urlshort: string = Math.random().toString(36).substring(2, 12)

      const newUrlShort = await UrlShortModel.create({
         codeShort: urlshort,
         urlOriginal: url
      })

      res.status(201).json({
         ok: true,
         msg: 'se acorto el link correctamente',
         newUrlShort
      })
   } catch (error) {
      res.status(404).json({
         ok: false,
         msg: 'No se pudo acortar el link',
      })
   }
}

const getShortUrl = async ({ params }: Request, res: Response) => {
   try {

      const { codeUrl } = params

      const url = await UrlShortModel.findOne({
         codeShort: codeUrl
      })
      if (!url) {
         return res.status(404).json({
            ok: false,
            msg: 'no se encontro el codigo url'
         })
      }

      return res.redirect(url.urlOriginal);

   } catch (error: any) {
      res.status(404).json({
         ok: false,
         msg: error.message,
      })
   }

}

export { createShortUrl, getShortUrl }