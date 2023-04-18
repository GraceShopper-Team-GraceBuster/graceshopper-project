const express = require('express')
const router = express.Router()
const {
    models: { Movies },
} = require('../db')

router.get('/', async (request, response, next) => {
    try {
        const movies = await Movies.findAll()
        response.json(movies)
    } catch (err) {
        next(err)
    }
})

module.exports = router
