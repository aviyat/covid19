const Buy = require('../models/buy')
const User = require('../models/user')
const Product = require('../models/product')
const jwt = require('jsonwebtoken')
const request = require('request')



const getAllProducts = (req, res) => {
    Product.find().then(data => res.send(data))
}


module.exports = { getAllProducts }
