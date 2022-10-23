const mongoose=require('mongoose')
const vaccinationSchema=mongoose.Schema({

    DoseDate:{
        type:Date,
        
    },
  
    producerName:{
        type:String,
    },
    datePositiveResult:{
        type:Date,
    },
    dateRecovery:{
        type:Date,

    },
  memberId:{
        type:mongoose.Types.ObjectId,
        ref:'member'
    }

})
module.exports = mongoose.model('members', vaccinationSchema)