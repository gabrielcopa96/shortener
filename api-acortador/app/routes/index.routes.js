const app = require('express').Router()

const controller = require('../controllers/shortUrl')

app
    .get('/:codeUrl', controller.getShortUrl)
    .post('/', controller.createShortUrl)


module.exports = app