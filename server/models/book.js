const {DataTypes} = require('sequelize')
const {sequelize} = require('../util/database')

module.exports = {
    Book: sequelize.define('book', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        imgURL: DataTypes.STRING(3000),
        title: DataTypes.STRING,
        desc: DataTypes.STRING(1000),
        priority: DataTypes.INTEGER,
        progress: DataTypes.INTEGER
    })
}