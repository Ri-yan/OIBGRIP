const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    orderer_id:{
        type : String,
        required: true
    },
    reciever_name :{
        type : String,
        required: true
    },
    address :{
        type : String,
    },
    ordername :{
        type : String,
        required: true
    },
    preview :{
        type : String,
        required: true
    },
    size :{
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
    },
    price :{
        type : Number,
        required: true
    },
    veggis: {
        type : String,
      },
    base: {
        type : String,
      },
    cheese: {
        type : String,
      },
    sause: {
        type : String,
      }
},{timestamps:true})

module.exports = mongoose.model("Orders",OrderSchema)