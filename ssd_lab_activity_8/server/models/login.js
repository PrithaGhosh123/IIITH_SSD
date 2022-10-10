const mongoose = require('mongoose')

const loginTemplate = new mongoose.Schema({
     rollnumber:{
        type: String,
        required: true
     },
     password:{
        type: String,
        required: true
     },
     role:{
        type: String,
        required: true
     }
})

module.exports = mongoose.model('table', 'loginTemplate')