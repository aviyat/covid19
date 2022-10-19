const mongoose = require('mongoose');
// const product = require('./product');
const productSchema = mongoose.Schema({

    prodName:{
        type:String,
        required:true
    },
    url:{
        type:String
    },
    prodDesc:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('product', productSchema)