const express = require("express")

const app = express()

require("./app/db");

// MIDDLEWARE -> Muestra en consola el metodo junto al endpoint al cual se hizo la peticion
// y muesta el estado de la peticion
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${res.statusCode}`)
    next();
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header(
        "Access-Control-Allow-Origin", "*"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST");
    next();
})

// Uso el index que esta en la carpeta routes 
app.use('/', require('./app/routes/index.routes'))


app.listen(3001, () => {
    console.log('Server listening on port 3000')
})