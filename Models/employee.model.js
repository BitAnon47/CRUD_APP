const mongoose = require('mongoose')

module.exports = mongoose.model('Employee', {
    fullname: { type: String },
    postion: { type: String },
    locaton: { type: String },
    salary: { type: Number },
})