const animalFoodRoutes = require('./animalFoodRoutes');
const animalRoutes = require('./animalRoutes');
const foodRoutes = require('./foodRoutes');

const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: 'HOME'
    })
})

route.use('/animals', animalRoutes);
route.use('/foods', foodRoutes);
route.use('/animalfoods', animalFoodRoutes);

module.exports = route;