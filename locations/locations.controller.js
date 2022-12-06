// This file is used to map API calls (Presentation Layer) with the
// Business-Logic layer

const router = require('express').Router()
const locationsService = require('./locations.service')


router.get('/locations', async (req, res) => {
	return res.status(200).send({locations: await locationsService.findAll()})
})

router.get('/HelloWorld',(req,res) => {
	return res.status(200).send('Hello World')
})

router.get('/locations/:id', async (req,res)=> {
	return res.status(200).send({locations: await locationsService.findOne(req.params.id)})
})


//const id =
router.post('/locations', async (req, res) => {
	return res.status(200).send({location: await locationsService.createOne(req.body)})
})

router.delete('/locations/:id', async (req,res) =>{
	return res.status(200).send( {location: locationsService.deleteLoc(req.params.id)})
})

router.patch('/locations/:id', async (req,res) =>{
	return res.status(200).send({location: locationsService.updateLoc(req.params.id,req.body)})
})



module.exports = router
