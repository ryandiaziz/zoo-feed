const { ClassTypeController } = require('../controllers')
const classTypeRoute = require('express').Router()

classTypeRoute.get('/', ClassTypeController.getClass);
classTypeRoute.get('/add/:id', ClassTypeController.addPage);
classTypeRoute.post('/add/:id', ClassTypeController.add);
classTypeRoute.get('/delete/:id', ClassTypeController.delete);
classTypeRoute.get('/detail/:id',ClassTypeController.detail)



module.exports = classTypeRoute;