const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const FB = require('fb');
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
 username: String,
 password: String,
 email: String,
 createdAt: {
   type: Date,
   default: Date.now
 },
 updatedAt: {
   type: Date,
   default: Date.now
 }
});

const Users = mongoose.model('Users', userSchema)

module.exports = Users
