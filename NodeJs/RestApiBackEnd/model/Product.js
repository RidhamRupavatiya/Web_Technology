const mongoose = require('mongoose');

const schema = mongoose.Schema({
    PId : Number,
    PName : String,
    PImage : String,
    Price : Number
});

module.exports = mongoose.model("product",schema);