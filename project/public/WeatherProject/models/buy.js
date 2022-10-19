const mongoose = require('mongoose')
const buySchema = mongoose.Schema({

    name: {
        type: String
    },
    date: {
        type: Date
    },
    sum: {
        type: String,
        required: true
    },
    Quantity: {
        type: String,
        required: true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'user'
    }

})
module.exports = mongoose.model('buy', buySchema)