const express = require('express');
const { addToCart, removeCartItem,showCart, updateCartItem } = require('../controllers/userCart');
const userCart = express.Router();
const auth = require('../middleware/auth')

userCart.get("/cart",auth,showCart)
userCart.post("/cart",auth,addToCart)
userCart.delete("/cart/:id",auth,removeCartItem)
userCart.put("/cart/:id",auth,updateCartItem)

module.exports=userCart;