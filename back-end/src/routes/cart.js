const express = require('express');
const router = express.Router();
const {addToCart} = require('../controller/cart')
const {userMiddlware,signinRequire} = require('../common-middlware/index')
router.post('/user/cart/add-to-cart',signinRequire,userMiddlware,addToCart)
module.exports = router;