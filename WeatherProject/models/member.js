const mongoose = require('mongoose');
// const product = require('./product');
const memberSchema = mongoose.Schema({

    url:{
        type:String
    },
    memberName:{
        type:String,
        required:true
    },

    id:{
        type:Number,
        required:true

    },
    adress:{
        type:String,
        required:true
    },
    bornDate:{
        type:Date,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    mobilePhone:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('product', memberSchema)