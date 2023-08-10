const juegoRepository = require('../Repository/juegos_repository')

const JuegosManager = {
    get:async (req, res) => {

         const {id} = req.params
         return await juegoRepository.findByPk(id)
    },

    list: async (req, res) => {

        return await juegoRepository.findAll()
    },

    create:async(req, res) => {
         return await juegoRepository.create({
            juegosNom: req.body.juegosNom,
            juegosDescription: req.body.juegosDescription,
         })
    },

    update: async (req, res) => {

        const {id} = req.params
        const juegos = await juegoRepository.findByPk(id)
        if(juegos){
            juegos.juegosNom = req.body.juegosNom
            juegos.juegosDescription = req.body.juegosDescription
            return await juegos.save()
        }
    },

    destroy: async (req, res) => {
        const {id} = req.params
        const juegos = await juegoRepository.findByPk(id)
        if (juegos){
            return await juegos.destroy()
        }
    },
}

module.exports = JuegosManager