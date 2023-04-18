const Sequelize = require('sequelize')
const db = require('../db')

const Movies = db.define('Movies', {
    Title: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },

    Genre: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },
    
    Director: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },

    LeadActor: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },
    
    Description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },

    Price: {
        type: Sequelize.NUMBER,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
        },
    },
})

module.exports = Movies