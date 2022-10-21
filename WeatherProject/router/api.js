
const product= require('../controller/product')
const member = require('../models/member')
const router = require('express').Router()




router.post('/addMember', product.addMember)



//products
router.get('/getAllProducts', product.getAllProducts)





module.exports = router