const animalFoodRoutes = require('./animalFoodRoutes');
const animalRoutes = require('./animalRoutes');
const classTypeRoutes = require('./classTypeRoutes');
const foodRoutes = require('./foodRoutes');
const HabitatRoutes = require('./habitatRoutes');
const route = require('express').Router();

route.get('/', (req, res) => {
    res.render('index.ejs');
})

route.use('/animals', animalRoutes);
route.use('/foods', foodRoutes);
route.use('/animalfoods', animalFoodRoutes);
route.use('/classtypes', classTypeRoutes);
route.use('/habitats', HabitatRoutes);

module.exports = route;