const express = require('express');
const { signIn, signUp } = require('../controllers/adminAuth');
const adminAuth = express.Router();

adminAuth.post("/signup",signUp)
adminAuth.post("/signin",signIn)

module.exports=adminAuth;