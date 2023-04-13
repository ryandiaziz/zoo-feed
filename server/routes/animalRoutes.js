const animalRoute = require("express").Router();
const { AnimalController } = require("../controllers");
const {upload} = require('../middleware/configUpload')


animalRoute.get("/", AnimalController.getAnimal);
animalRoute.post("/add",upload.single("imageUrl"), AnimalController.add);
animalRoute.delete("/delete/:id", AnimalController.delete);
animalRoute.get("/detail/:id", AnimalController.getAnimalDetail);
animalRoute.put("/update/:id",upload.single("imageUrl"), AnimalController.update);


module.exports = animalRoute;
