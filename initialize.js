const sequelize = require('./conexion')

module.exports = async function initializeApp(){
    try{
        await sequelize.sync({ force: false })
        console.log('Conexion y sincronizacion exitosas.')
    }catch(error){
        console.error('Error al momento de sincronizar con la base de datos:', error)
    }
}