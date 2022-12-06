const mongoose = require('mongoose')
const {mongo} = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})
const Users = mongoose.model("Users", userSchema)

module.exports = Users