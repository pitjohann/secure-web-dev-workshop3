const Users = require('./user.model')
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken')
const numSaltRounds = 8;
//const Location = require("../locations/locations.model");

function findAll () {

    return Users.find({}).limit(10)
}

function findOne (username) {

    return Users.findOne({username:username})
}

async function createUser(userData) {
    const password = await bcrypt.hash(userData['password'],numSaltRounds)
    const newUser = new Users({...userData,password:password})

    try{
        return await newUser.save()
    } catch(e){
        throw new Error("user not unique")
    }

}

async function getAll(){
    const arr = await Users.find();
    let result = arr.map(a=>a.username)
    return result
}

async function verifyPassword(user,password){

    const isMatching = await bcrypt.compare(password,user.password)
    return isMatching

}

async function getToken(_id) {
    return jwt.sign({sub:_id}, process.env.JWT_SECRET);
}


module.exports.findAll = findAll
module.exports.findOne = findOne

module.exports.createUser = createUser
module.exports.getAll = getAll
module.exports.verifyPassword = verifyPassword
module.exports.getToken = getToken
