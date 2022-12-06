const express = require('express')
const locationController = require('./locations/locations.controller')
const userController = require('./User/user.controller')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(locationController)
app.use(userController)

app.listen(port, async () =>	 {
	await mongoose.connect(process.env.MONGO_URI)
	console.log(`API listening on port ${port}, visit http://localhost:${port}/`)
})


