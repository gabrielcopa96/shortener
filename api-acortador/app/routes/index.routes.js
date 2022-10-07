const app = require('express').Router()

const controller = require('../controllers/shortUrl')

app
    .get('/', (req, res) => {
        res.send('Bienvenido a la api de acortador de URL')
    })
    .get('/:codeUrl', controller.getShortUrl)
    .post('/', controller.createShortUrl)


module.exports = app