const animalFoodRoutes = require('./animalFoodRoutes');
const animalRoutes = require('./animalRoutes');
const classTypeRoutes = require('./classTypeRoutes');
const foodRoutes = require('./foodRoutes');
const HabitatRoutes = require('./habitatRoutes');
const homeRoutes = require('./homeRoutes');
const route = require('express').Router();

route.get('/', homeRoutes);
route.use('/animals', animalRoutes);
route.use('/foods', foodRoutes);
route.use('/animalfoods', animalFoodRoutes);
route.use('/classtypes', classTypeRoutes);
route.use('/habitats', HabitatRoutes);

module.exports = route;