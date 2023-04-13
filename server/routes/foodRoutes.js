const foodRoute = require('express').Router();
const { FoodController } = require("../controllers");
const {upload} = require('../middleware/configUpload')


foodRoute.get('/', FoodController.getFood)
foodRoute.post('/add',upload.single("imageUrl"), FoodController.add)
foodRoute.delete('/delete/:id', FoodController.delete)
foodRoute.get('/detail/:id', FoodController.getFoodDetail) 
foodRoute.put('/update/:id',upload.single("imageUrl"), FoodController.update)


module.exports = foodRoute;