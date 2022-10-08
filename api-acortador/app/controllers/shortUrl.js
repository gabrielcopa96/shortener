const Urlshort = require('../models/Urlshort');

const createShortUrl = async (req, res) => {
    const { url } = req.body
    const myUrl = req.hostname
    const urlshort = Math.random().toString(36).substring(2, 12)

    try {
        const newUrlShort = await Urlshort.create({
            codeShort: urlshort,
            urlOriginal: url
        })
        console.log(myUrl);
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

const getShortUrl = async (req, res) => {
    const { codeUrl } = req.params

    try {
        const url = await Urlshort.findOne({
            codeShort: codeUrl
        })
        if (!url) {
            return res.status(404).json({
                ok: false,
                msg: 'no se encontro el codigo url'
            })
        }
        return res.redirect(url.urlOriginal);
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'Ocurrio un error al intentar buscar el codigo',
            error
        })
    }

}

module.exports = {
    createShortUrl,
    getShortUrl
}