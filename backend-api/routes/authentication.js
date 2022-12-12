const express = require('express');
const { signIn, signUp } = require('../controllers/userAuth');
const userAuth = express.Router();

userAuth.post("/signup",signUp)
userAuth.post("/signin",signIn)

module.exports=userAuth;