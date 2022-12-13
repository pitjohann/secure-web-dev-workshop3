// This file holds the Business-Logic layer, interacting with Data Layer

const Location = require('./locations.model')

function findAll () {

	return Location.find()
}

function findOne(id){
	return Location.findById(id)
}
async function createOne(locationdata) {
	const newLoc = new Location(locationdata)

	return await newLoc.save()
}
async function deleteLoc(locationId) {
	const result = await Location.deleteOne({ _id : locationId})
	return result.deletedCount
}

async function updateLoc(id,body){
	const result = await Location.updateOne({_id : id},body)
	return result
}

module.exports.deleteLoc = deleteLoc
module.exports.createOne = createOne
module.exports.findOne = findOne
module.exports.findAll = findAll
module.exports.updateLoc = updateLoc
