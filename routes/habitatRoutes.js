const { HabitatController } = require('../controllers');

const HabitatRoute = require('express').Router()


HabitatRoute.get('/', HabitatController.getHabitat)
HabitatRoute.post('/add', HabitatController.add)
HabitatRoute.get('/delete/:id', HabitatController.delete)


module.exports = HabitatRoute