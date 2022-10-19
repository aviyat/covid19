const Buy = require('../models/buy')
const User = require('../models/user')
const Product = require('../models/product')
// const nodemailer = require('nodemailer')
const env = require('dotenv')
const jwt = require('jsonwebtoken')
const user = require('../models/user')
// const buy = require('../models/buy')

env.config()


const signUp = (req, res) => {
    console.log("sign");
    console.log(req.body);
    let currentUser = new User(req.body)
    currentUser.save()
        .then((user) => {
            res.status(200).json({ massage: 'user created', myUser: user })
        })
        .catch(err => {
            res.status(400).send('erorrr!!!!')
        })
}
const loginUser = (req, res) => {

    User.findOne({ name: req.body.name, password: req.body.password })
        .then((user) => {
            if (user != null)
                res.status(200).json({ massage: 'user found', myUser: user })
                else
                (res.status(400).json({massage:'user not found'}))
            
        })
       
}
const getUserById = (req, res) => {
    User.findById(req.params._id)
        .then(data => { console.log(data); res.status(200).json({ user: data }) })
        .catch(err => { res.status(400).send('The user is not exist,if you new user, signUp!!!') })
}
const addBuy = async (req, res) => {
    console.log("addBuy");
    console.log(req.body.user.name, req.body.user.password);
    let buyy = await new Buy({ userId: req.body.userId, sum: req.body.history.sum, Quantity: req.body.history.Quantity,date : req.body.history.date })
    buyy.save().then(buy =>
        User.findOneAndUpdate({ name: req.body.user.name, password: req.body.user.password }, { $push: { 'history': buy._id } }).then(eee => {
            res.status(200);
          
        })
    )
  
}


module.exports = { signUp, getUserById, loginUser, addBuy }