const express = require('express');
const router = express.Router();
const {signin, signup} = require('../../controller/admin/auth')
const {validatorSignUP,ValidReq} = require('../../validators/index')
router.post('/signin',signin)
router.post('/signup',validatorSignUP,ValidReq,signup)
module.exports = router