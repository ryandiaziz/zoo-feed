const animalFoodRoutes = require('./animalFoodRoutes');
const animalRoutes = require('./animalRoutes');
const classTypeRoutes = require('./classTypeRoutes');
const foodRoutes = require('./foodRoutes');
const HabitatRoutes = require('./habitatRoutes');
const homeRoutes = require('./homeRoutes');
const route = require('express').Router();

route.get('/api', homeRoutes);
route.use('/api/animals', animalRoutes);
route.use('/api/foods', foodRoutes);
route.use('/api/animalfoods', animalFoodRoutes);
route.use('/api/classtypes', classTypeRoutes);
route.use('/api/habitats', HabitatRoutes);

module.exports = route;