
const member = require('../models/member')
const jwt = require('jsonwebtoken')
const request = require('request')
const env = require('dotenv')
const Member = require('../models/member')



env.config()


const getAllMembers = (req, res) => {
    member.find().then(data => res.send(data))
}


const addMember = (req, res) => {
    console.log("sign");
    console.log(req.body);
    let currentMember = new Member(req.body)
    currentMember.save()
        .then((member) => {
            res.status(200).json({ massage: 'member created', myMember: member })
        })
        .catch(err => {
            res.status(400).send('erorrr!!!!')
        })
}

module.exports = { getAllMembers,addMember }
