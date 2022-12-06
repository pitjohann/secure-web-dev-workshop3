const Users = require('./User.model')
const bcryptjs = require('bcryptjs');
const numSaltRounds = 8;
//const Location = require("../locations/locations.model");

function findAll () {

    return Users.find({}).limit(10)
}

async function createUser(userData) {
    const newUser = new Users(userData)

    return await newUser.save()
}

async function loginUser(userData) {
    const actualUser = new Users(userData)
    return Users.find()
}

module.exports.findAll = findAll
module.exports.createUser = createUser
