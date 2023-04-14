const animalUserRoute = require('express').Router()
const {AnimalUserController} = require('../controllers')


animalUserRoute.get('/', AnimalUserController.get);
animalUserRoute.post('/add', AnimalUserController.add);
animalUserRoute.delete('/delete/:id1/:id2', AnimalUserController.delete)

module.exports = animalUserRoute
