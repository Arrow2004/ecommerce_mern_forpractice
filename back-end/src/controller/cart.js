const Cart = require('../models/cart')
const product = require('../models/product')
exports.addToCart = (req,res)=>{
    const userId = req.user._id;
    Cart.findOne({user: userId}).exec((err,cart)=>{
        if(err) return res.status(400).json(err)
        if(cart){
            const item = cart.cartItems.find(c=>c.product==req.body.cartItem.product);
            let filter,changer;
            if(item){
                filter = {user: userId, "cartItems.product": req.body.cartItem.product};
                changer={
                    "$set": {
                        "cartItems.$": {
                            ...req.body.cartItem,
                            quantity: req.body.cartItem.quantity+item.quantity
                        }
                    }
                    
                }
            }
            else{
                filter = {user: userId};
                changer = {
                    "$push": {
                        "cartItems": req.body.cartItem
                    }
                    
                }
            }
            const _cart = Cart.findOneAndUpdate(filter,changer,{returnOriginal : false}).exec((err,cartn)=>{
                if(err) {
                    console.log(err)
                    return res.status(400).json(err)
                }
                else return res.status(201).json(cartn)
            })
        }
        else{
            const _cart = new Cart({
                user: userId,
                cartItems: [req.body.cartItem]
            })
            _cart.save((err,cart)=>{
                if(err) return res.status(400).json(err);
                return res.status(201).json(cart);
            })
        }
    })
}