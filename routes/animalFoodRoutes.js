const animalFoodRoute = require('express').Router();
const { AnimalFoodController} = require("../controllers")

animalFoodRoute.get('/', AnimalFoodController.getAnimalFood);
animalFoodRoute.get('/FA/add/:id', AnimalFoodController.addPageFA);
animalFoodRoute.post('/FA/add/:id', AnimalFoodController.addFA);
animalFoodRoute.get('/AF/add/:id', AnimalFoodController.addPageAF);



module.exports = animalFoodRoute;