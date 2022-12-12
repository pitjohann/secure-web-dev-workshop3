const Users = require('./User.model')
const bcryptjs = require('bcryptjs');
const numSaltRounds = 8;
//const Location = require("../locations/locations.model");

function findAll () {

    return Users.find({}).limit(10)
}

async function createUser(userData) {
    const password = await bcryptjs.hash(userData['password'],numSaltRounds)
    const newUser = new Users({...userData,password:password})

    try{
        return await newUser.save()
    } catch(e){
        throw new Error("User not unique")
    }

}

async function loginUser(userData) {
    const actualUser = new Users(userData)
    return Users.find(actualUser)
}

async function getAll(){
    const arr = await Users.find();
    let result = arr.map(a=>a.username)
    return result
}



module.exports.findAll = findAll
module.exports.createUser = createUser
module.exports.getAll = getAll
