const express = require('express');
const router = express.Router();
const {adminMiddlware,signinRequire} = require('../common-middlware/index')
const {addProduct} = require('../controller/product')
const multer = require('multer');
const shortid = require('shortid')
const path = require('path')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname),'uploads'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, shortid.generate()+'-'+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
router.post('/products/add',signinRequire,adminMiddlware,upload.array('productPictures'),addProduct)
module.exports = router