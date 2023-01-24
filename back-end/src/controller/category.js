const { default: slugify } = require('slugify')
const Category = require('../models/category')
function createCategory(categories,parentId=null){
    let categoryList = []
    let category;
    if(parentId == null){
        category = categories.filter(cat => cat.parentId==undefined)
    }else{
        category = categories.filter(cat => cat.parentId==parentId)
    }
    for(let cat of category){
        categoryList.push({
            name: cat.name,
            _id: cat._id,
            slug: cat.slug,
            children: createCategory(categories,cat._id)
        })
    }
    return categoryList
}
exports.addCategory = (req,res)=>{
    let catObj = {name: req.body.name, slug: slugify(req.body.name)}
    if(req.body.parentId){
        catObj.parentId = req.body.parentId
    }
    const _cat = new Category(catObj);
    _cat.save((err,category)=>{
        if(err) return res.status(400).json(err)
        return res.status(200).json(category)
    })
}
exports.getCategory = (req,res)=>{
    Category.find({}).exec((err,categories)=>{
        if(err) return res.status(400).json(err)
        console.log(createCategory(categories))
        if(categories) return res.status(200).json(createCategory(categories))
    })
    
}