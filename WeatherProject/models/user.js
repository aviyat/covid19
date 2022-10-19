const mongoose = require('mongoose')
const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    history:[{
        type:mongoose.Types.ObjectId,
        ref:'buy'
    }]

})
module.exports = mongoose.model('user', userSchema)