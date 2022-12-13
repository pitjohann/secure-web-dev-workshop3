const router = require('express').Router()
const userService = require('./user.services')
const passport = require('passport')
const local = require('../Middleware/passport-local')
const jwt =require('jsonwebtoken')
//const locationsService = require("../locations/locations.service");

router.get('/users/register', async (req,res)=> {
    return res.status(200).send({users: await userService.findAll(req.params.id)})
})

router.post('/users/register', async (req,res)=> {
    try {
        return res.status(200).send({users: await userService.createUser(req.body)})
    }catch(e){
        if (e.message=="user not unique"){
            return res.status(400).send("user isn't unique")
        }
        return res.status(400).send("Bad Request")
    }
})

router.post('/users/login', passport.authenticate('local', {session:false,}) , async (req,res)=> {
    const id = req.user?._id
    const token = await userService.getToken(id)
    return res.status(200).send({token})
})

router.get('/users', async (req,res) => {
    return res.status(200).send({users: await userService.getAll() })
})



module.exports = router
