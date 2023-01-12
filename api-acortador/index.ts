import express, { Request, Response, NextFunction } from 'express'

import 'dotenv/config'
import cors from "cors";

const app = express()

import connectionMongo from './src/db'
import router from './src/routes/index.routes'

app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`${req.method} ${req.url} - ${res.statusCode}`)
    next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// CORS o politicas de seguridad
app.use(cors())

// ROUTE
app.get('/', (req: Request, res: Response) => {
    res.redirect('https://shortenerweb.vercel.app/')
})

// Uso el index que esta en la carpeta routes
app.use('/', router)

connectionMongo.then(() => {
    app.listen(process.env.PORT || 3002, () => {
        console.log('listening on port', process.env.PORT || 3002)
    })
    console.log('Mongo Connected')
}).catch(() => {
    console.log('listening on port', process.env.PORT || 3002)
})
