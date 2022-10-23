
const product= require('../controller/product')
const member = require('../models/member')
const router = require('express').Router()




router.post('/addMember', product.addMember)
router.get('/getAllMembers', product.getAllMembers)





module.exports = router