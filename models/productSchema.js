const mongoose = require('mongoose');

//product schema
let ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type:String,
        required: true
    },
    address: {
        type:String,
        required: true
    }
});

let Product = module.exports=mongoose.model('Product',ProductSchema);