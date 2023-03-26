const foodRoute = require('express').Router();
const { FoodController } = require("../controllers");


foodRoute.get('/', FoodController.getFood)
foodRoute.get('/add', FoodController.addPage)// add page
foodRoute.post('/add', FoodController.add)
foodRoute.get('/delete/:id', FoodController.delete)

module.exports = foodRoute;