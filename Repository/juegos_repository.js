const {DataTypes} = require('sequelize')
const sequelize = require('../conexion')

const juegos = sequelize.define(
    'juegos',
    {

        juegosId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        juegosNom: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        juegosDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {

    }
)

module.exports = juegos