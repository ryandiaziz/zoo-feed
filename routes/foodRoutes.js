const foodRoute = require('express').Router();
const { FoodController } = require("../controllers");

foodRoute.get('/', FoodController.showFoods);

module.exports = foodRoute;