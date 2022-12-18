const router = require('express').Router()
const userService = require('./user.services')
const passport = require('passport')
require('../Middleware/passport-local')
const jwt =require('jsonwebtoken')
require('../Middleware/passport-jwt')
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


router.get('/users/me', passport.authenticate('jwt',{session: false}), async (req, res) => {
    return res.status(200).send({users: await userService.findOne(req.user.username)})
})

router.delete('/users/me', passport.authenticate('jwt',{session: false}), async (req, res) => {
    return res.status(200).send(await userService.Delete(req.user._id))
})

router.patch('/users/me',passport.authenticate('jwt',{session: false}), async (req,res)=>{
    try {
        const me = await userService.Update(req.user._id, req.body)
        return res.status(200).send(me)
    }
    catch(e) {
        return res.status(400).send("Bad Request")
    }
})

router.use('/users/me',passport.authenticate('jwt', {session:false, failureRedirect:'/users/login'}));

module.exports = router
