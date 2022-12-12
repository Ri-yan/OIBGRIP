const express = require('express');
const app = express();
const userAuth = require("./routes/authentication");
const userCart = require("./routes/cart");
const pizzaMenu = require('./routes/Menu');
const adminAuth = require("./routes/adminAuthentication")
const Materials = require("./routes/materials")
const Orders = require("./routes/Orders")

const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const mongoose = require("mongoose");


app.use(express.json())
app.use(cors())
app.use("/",pizzaMenu)
app.use("/",userAuth)
app.use("/",userCart)
app.use("/",Orders)
app.use("/materials",Materials)

app.use("/admin",adminAuth)
app.get('/',(req,res)=>{
    res.send("Hello Pizza")
})

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT,()=>{
        console.log('server started at', PORT)
    })
}).catch(e=>console.log(e.message))

