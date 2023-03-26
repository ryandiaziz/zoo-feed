const animalFoodRoute = require('express').Router();
const { AnimalFoodController } = require("../controllers")

animalFoodRoute.get('/', AnimalFoodController.getAnimalFood);
animalFoodRoute.post('/add', AnimalFoodController.addAnimalFood);


module.exports = animalFoodRoute;