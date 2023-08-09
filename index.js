/*Modulos de tercerros*/
const express = require('express')
const port= 3005
const initializeApp = require('./initialize')

/*Rutas*/
initializeApp()

const rutaJuegos = require('./Routes/juegos_routes')
const app = express()
app.use(express.json())

/*Mis rutas de mi app Express*/
app.use("/api", rutaJuegos)

/*Cualquier otra ruta no especificada que resulte en un  error 404*/
app.get('*', (req, res) =>{
    res.status(404).send('Pagina no encontrada')
})

/*Ejecuta el servidor*/
app.listen(port, ()=>{
    console.log("servidor ejecutado", port)})