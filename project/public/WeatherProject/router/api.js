const user = require('../controller/user')
const product= require('../controller/product')
const router = require('express').Router()


//user

router.post('/signUp', user.signUp)
router.post('/loginUser', user.loginUser)
router.get('/getUserById/:_id', user.getUserById)
router.post('/addBuy', user.addBuy)

//products
router.get('/getAllProducts', product.getAllProducts)



module.exports = router