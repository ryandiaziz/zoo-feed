const foodRoute = require('express').Router();
const { FoodController } = require("../controllers");


foodRoute.get('/', FoodController.getFood)
foodRoute.get('/add', FoodController.addPage) // Add page
foodRoute.post('/add', FoodController.add)
foodRoute.get('/delete/:id', FoodController.delete)
foodRoute.get('/update/:id', FoodController.updatePage) // Update page
foodRoute.post('/update/:id', FoodController.update)
foodRoute.get('/detail/:id', FoodController.detailPage) // detail page
module.exports = foodRoute;