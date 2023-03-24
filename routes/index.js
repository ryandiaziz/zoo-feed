const route = require('express').Router();

route.get('/', (req, res) => {
    res.json({
        message: 'yes'
    })
})

module.exports = route;