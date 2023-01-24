const express = require('express');
const router = express.Router();
const {addCategory, getCategory} = require('../controller/category')
const {adminMiddlware,userMiddlware,signinRequire} = require('../common-middlware/index')
router.post('/addCategory',signinRequire,adminMiddlware,addCategory)
router.get('/getCategory',signinRequire,userMiddlware,getCategory)
module.exports = router;