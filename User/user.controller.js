const router = require('express').Router()
const userService = require('./user.services')
//const locationsService = require("../locations/locations.service");

router.get('/users/register', async (req,res)=> {
    return res.status(200).send({locations: await userService.findAll(req.params.id)})
})

router.post('/users/register', async (req,res)=> {
    return res.status(200).send({users: await userService.createUser(req.body)})
})

router.post('/users/login', async (req,res)=> {
    return res.status(200).send({users: await userService.createUser(req.body)})
})

module.exports = router
