const express = require('express')
const router = express.Router()

/*Controlador*/
const controladorjuego = require('../controllers/juegos_controllers')

/*Asignacion de acciones a las rutas y funciones a realizar*/
router.get('/juegos:id', controladorjuego.get)
router.get('/juegos', controladorjuego.list)
router.post('/juegos', controladorjuego.create)
router.put('/juegos:id', controladorjuego.update)
router.delete('/juegos:id', controladorjuego.destroy)

module.exports = router