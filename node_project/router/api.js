
const product= require('../controller/product')
const member = require('../models/member')
const router = require('express').Router()




router.post('/addMember', product.addMember)
router.get('/getAllMembers', product.getAllMembers)
 

// router.patch('/:id', updateProduct);
// router.delete('/:id', deleteProduct);




module.exports = router