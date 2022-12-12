const express = require('express');
const { addMaterial, getMaterial,updateStatus } = require('../controllers/materialsEdit');

const materials = express.Router();
const auth = require('../middleware/auth')

materials.get("/get",getMaterial)
materials.post("/add",auth,addMaterial)
// materials.delete("/cart/:id",auth,removeCartItem)
materials.put("/status/:id",updateStatus)

module.exports=materials;