const mongoose = require('mongoose')
const {mongo} = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        unique : true
    },
    password: String
})
const Users = mongoose.model("Users", userSchema)

module.exports = Users