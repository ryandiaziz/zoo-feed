const animalRoute = require('express').Router();
const { AnimalController } = require("../controllers");

animalRoute.get('/', AnimalController.getAnimal)
animalRoute.get('/add', AnimalController.addPage)// add page
animalRoute.post('/add', AnimalController.add)
animalRoute.get('/delete/:id', AnimalController.delete)
animalRoute.get('/update/:id', AnimalController.updatePage)// update page
animalRoute.post('/update/:id', AnimalController.update)
animalRoute.get('/:id', AnimalController.getAnimalDetail)
animalRoute.get('/:id/foods', AnimalController.getAnimalFood)


module.exports = animalRoute;