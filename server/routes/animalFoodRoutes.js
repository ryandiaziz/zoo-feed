const animalFoodRoute = require('express').Router();
const { AnimalFoodController} = require("../controllers")

animalFoodRoute.get('/', AnimalFoodController.getAnimalFood);

animalFoodRoute.post('/FA/add/:id', AnimalFoodController.addFA);
animalFoodRoute.delete('/FA/delete/:id1/:id2', AnimalFoodController.deleteFA)

animalFoodRoute.post('/AF/add/:id', AnimalFoodController.addAF);
animalFoodRoute.delete('/AF/delete/:id1/:id2', AnimalFoodController.deleteAF)



module.exports = animalFoodRoute;