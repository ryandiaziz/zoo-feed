const animalFoodRoutes = require("./animalFoodRoutes");
const animalRoutes = require("./animalRoutes");
const animalUserRoutes = require("./animalUserRoutes");
const classTypeRoutes = require("./classTypeRoutes");
const foodRoutes = require("./foodRoutes");
const HabitatRoutes = require("./habitatRoutes");
const homeRoutes = require("./homeRoutes");
const roleRoutes = require("./role");
const userRoutes = require("./userRoutes");

const route = require("express").Router();

route.use("/", homeRoutes);
route.use("/api/animals", animalRoutes);
route.use("/api/foods", foodRoutes);
route.use("/api/animalfoods", animalFoodRoutes);
route.use("/api/classtypes", classTypeRoutes);
route.use("/api/habitats", HabitatRoutes);
route.use("/api/users", userRoutes);
route.use("/api/animaluser", animalUserRoutes);
route.use("/api/role", roleRoutes);

module.exports = route;
