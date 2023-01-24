const { default: slugify } = require('slugify');
const Product = require('../models/product');
exports.addProduct = (req,res)=>{
    const {name,price,description,quantity,category} = req.body;
    let productPictures = [];
    if(req.files.length>0){
        productPictures = req.files.map(file=>{
            return {img: file.filename}
        })
    }
    const product = new Product({
        name,
        slug: slugify(name),
        price,
        description,
        productPictures,
        category,
        createdBy: req.user._id,
        quantity
    })
    
    product.save((err,product)=>{
        if(err) return res.status(400).json({err})
        if(product) return res.status(200).json({product})
    })
}