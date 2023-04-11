const { HabitatController } = require('../controllers');

const HabitatRoute = require('express').Router()


HabitatRoute.get('/', HabitatController.getHabitat)
HabitatRoute.get('/add/:id', HabitatController.addPage)
HabitatRoute.post('/add/:id', HabitatController.add)
HabitatRoute.get('/delete/:id', HabitatController.delete)
HabitatRoute.get('/detail/:id', HabitatController.detail)

module.exports = HabitatRoute