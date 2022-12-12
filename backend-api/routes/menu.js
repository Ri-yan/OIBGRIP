const express = require('express');
const { getMenu,addMenuItem } = require('../controllers/globalMenu');
const pizzaMenu = express.Router();

pizzaMenu.get("/menu",getMenu)
pizzaMenu.post("/menu",addMenuItem)

module.exports=pizzaMenu;