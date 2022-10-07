const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config();

// Realizo la conexion a mi base de datos mongoDB en caso de que sea exitosa
// muestro en consola que se conecto a la base de datos, en caso contrario
// muestor en consola que no se pudo conectar y mando el error
mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log('Connected to mongoDB')
}).catch((err) => {
    console.log('Error connecting to mongoDB', err)
})

module.export = mongoose