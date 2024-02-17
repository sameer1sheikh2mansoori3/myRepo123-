const mongoose = require('mongoose');


const userShema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const  userModel = mongoose.model('userModel',userShema );

module.exports = userModel;