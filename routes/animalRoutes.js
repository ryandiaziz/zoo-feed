const animalRoute = require('express').Router();
const { AnimalController } = require("../controllers");

animalRoute.get('/', AnimalController.getAnimal)
animalRoute.get('/detail/:id', AnimalController.getAnimalDetail)
animalRoute.get('/add', AnimalController.showAddPage);
animalRoute.post('/add', AnimalController.add)
animalRoute.get('/delete/:id', AnimalController.delete)
animalRoute.get('/update/:id', AnimalController.updatePage)// update page
animalRoute.post('/update/:id', AnimalController.update)

module.exports = animalRoute;