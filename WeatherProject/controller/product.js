
// const User = require('../models/user')
const member = require('../models/member')
const jwt = require('jsonwebtoken')
const request = require('request')



const getAllProducts = (req, res) => {
    member.find().then(data => res.send(data))
}


module.exports = { getAllProducts }
