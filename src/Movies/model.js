const sequelize = require('../db/connection');
const { DataTypes } = require('sequelize');

const Film = sequelize.define('Movie', {
    name: {
        type : DataTypes.STRING,
        allowNull : false
    },
    actor: {
        type : DataTypes.STRING,
        allowNull : false
    },
    year: {
        type : DataTypes.INTEGER,
    }
})

module.exports = Film;