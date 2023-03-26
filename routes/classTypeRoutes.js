const { ClassTypeController } = require('../controllers')
const classTypeRoute = require('express').Router()

classTypeRoute.get('/', ClassTypeController.getClass);
classTypeRoute.post('/add', ClassTypeController.add);
classTypeRoute.get('/delete/:id', ClassTypeController.delete);

module.exports = classTypeRoute;