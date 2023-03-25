const animalFoodRoute = require('express').Router();
const { AnimalFoodController } = require("../controllers")

animalFoodRoute.get('/', AnimalFoodController.addAnimalFood);

module.exports = animalFoodRoute;