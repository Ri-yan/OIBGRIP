const mongoose = require("mongoose")

const MaterialsSchema = mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    type :{
        type : String,
        required: true
    },
    avail :{
        type : String,
        required: true
    },
    price :{
        type : Number,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model("Materials",MaterialsSchema)