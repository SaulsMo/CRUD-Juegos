const JuegosManager = require('../managers/juegos_managers')

const juegosController = {
    get:async(req, res) => {
        try{
            const juegos = await JuegosManager.get(req)
            if(!juegos){
                res.status(404).send ('Juego no encontrado')
            }else{
                res.status(200).send(juegos)
            }
        }catch (error){
            res.status (500).send('Error en el servidor')
        }
    },
    list:async(req, res) => {
        try{
            const juegosList = await JuegosManager.list()
            res.status(200).send(juegosList)
        }catch (error){
            res.status(500).send('Error en el servidor')
        }
    },
    create:async (req, res) => {
        try{
            const juegosCreated = await JuegosManager.create(req)
            res.status(201).send('Juego Registrado')
        }catch (error){
            res.status(500).send('Error en el servidor')
        }
    },
    update:async (req, res) => {
        try{
            const juegosUpdated = await JuegosManager.update(req)
            if (!juegosUpdated) {
                res.status(404).send('Juego no encontrado')
            }else{
                res.status(200).send('Juego actualizado')
            }
        }catch (error){
            res.status(500).send('Error en el servidor')
        }
    },
    destroy:async (req, res) => {
        try{
            const juegoDestroyed = await JuegosManager.destroy(req)
            if(!juegoDestroyed){
                res.status(404).send('Juego no encontrado')
            }else{
                res.status(200).send('Juego eliminado')
            }
        }catch(error){
            res.status(500).send('Error en el servidor')
        }
    },
}

module.exports = juegosController