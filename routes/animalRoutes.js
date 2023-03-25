const animalRoute = require('express').Router();
const { AnimalController } = require("../controllers");

animalRoute.get('/', AnimalController.showAnimals);

module.exports = animalRoute;