const express = require('express')
const rout = require('express').Router()

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const produts = require('./models/product')
const jwt = require('jsonwebtoken')
const env = require('dotenv')
const router = require('./router/api')
const app = express()
env.config()
app.use(bodyParser.json())
const prod = require('./controller/allProduct')



const { Router } = require('express')
const product = require('./models/product')

const userScema = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.CONNECT_DB, userScema)
    .then(() => { console.log('connect to the mongo'); })
    .catch((err) => { console.log('error:' + err); })


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authoriztion");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// console.log(prod);
// product.insertMany(prod,(err, res)=>{
//     if (err) throw err;
//     console.log("succsess");
//  })

app.use('/', router)
app.listen(5000, () => { console.log("connect to port 5000"); })
