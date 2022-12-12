const mongoose = require("mongoose")

const CartSchema = mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    quantity :{
        type : Number,
        required: true
    },
    status :{
        type : String,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model("Cart",CartSchema)