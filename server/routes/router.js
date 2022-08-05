const express = require('express')
const route = express.Router()

const services = require('../services/render')

//@description - Root Route - Method GET /
route.get('/', services.homeRoutes)

//@description - add users - Method GET /add-user
route.get('/add_user', services.add_user)

//@description - update user - Method GET /update_user
route.get('/update-user', services.update_user)

module.exports= route