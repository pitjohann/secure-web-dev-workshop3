// This file holds the Business-Logic layer, interacting with Data Layer

const Location = require('./locations.model')

function findAll () {

	return Location.find({}).limit(10)
}

function findOne(id){
	return Location.findById(id)
}
function createOne(locationdata) {
	const newLoc = new Location(locationdata)

	return newLoc.save()
}

module.exports.createOne = createOne
module.exports.findOne = findOne
module.exports.findAll = findAll
