const userRoute = require('express').Router()
const {UserController} = require("../controllers/")
const {upload} = require('../middleware/configUpload')


userRoute.get('/', UserController.getUsers)
userRoute.post('/create', UserController.createUser)
userRoute.post('/login',UserController.login)
userRoute.put('/update',UserController.update)
userRoute.delete('/delete/:id', UserController.delete)
userRoute.get('/account/:id',UserController.getAccount)
module.exports = userRoute
