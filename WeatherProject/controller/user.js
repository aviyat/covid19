
const User = require('../models/user')
// const nodemailer = require('nodemailer')
const env = require('dotenv')
const jwt = require('jsonwebtoken')
const user = require('../models/user')


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
// const loginUser = (req, res) => {

//     User.findOne({ name: req.body.name, password: req.body.password })
//         .then((user) => {
//             if (user != null)
//                 res.status(200).json({ massage: 'user found', myUser: user })
//                 else
//                 (res.status(400).json({massage:'user not found'}))
            
//         })
       
// }



module.exports = { signUp }