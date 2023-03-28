const animalFoodRoute = require('express').Router();
const { AnimalFoodController} = require("../controllers")

animalFoodRoute.get('/', AnimalFoodController.getAnimalFood);
animalFoodRoute.get('/FA/add/:id', AnimalFoodController.addPageFA);
animalFoodRoute.post('/FA/add/:id', AnimalFoodController.addFA);
animalFoodRoute.get('/FA/delete/:id1/:id2', AnimalFoodController.deleteFA)
animalFoodRoute.get('/AF/add/:id', AnimalFoodController.addPageAF);
animalFoodRoute.post('/AF/add/:id', AnimalFoodController.addAF);
// animalFoodRoute.get('/AF/delete/:id1/:id2', AnimalFoodController.deleteAF)



module.exports = animalFoodRoute;