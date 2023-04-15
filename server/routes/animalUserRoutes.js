const animalUserRoute = require('express').Router()
const {AnimalUserController} = require('../controllers')
const {auth} = require('../middleware/auth')

animalUserRoute.get('/',auth, AnimalUserController.get);
animalUserRoute.post('/add/:id',auth, AnimalUserController.add);
animalUserRoute.delete('/delete/:id',auth, AnimalUserController.delete)

module.exports = animalUserRoute
