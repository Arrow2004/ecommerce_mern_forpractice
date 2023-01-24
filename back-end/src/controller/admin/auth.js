const jwt = require('jsonwebtoken')
const User = require('../../models/user')
module.exports.signin = (req,res)=>{
    User.findOne({email: req.body.email})
    .exec((err,user)=>{
        if(err) return res.status(400).json({err});
        if(user){
            if(user.authenticate(req.body.password) && user.role === 'admin'){
                const token = jwt.sign({_id: user._id, role: user.role},process.env.JWT_SECRET, {expiresIn: '1h'});
                const {firstName, lastName, email,role} = user;
                res.header('Acces-token',token)
                res.status(200).json({
                    firstName, lastName, email, role
                })
            }else{
                return res.status(400).json({message: 'Invalid password'});
            }
        }else{
            return res.status(400).json({message: "something went wrong"})
        }
    })
}
module.exports.signup = (req,res)=>{
    User.findOne({email: req.body.email}).exec((err,user)=>{
        if(user) return res.status(400).json({
            message: "Admin already registred"
        })
            const {
                firstName,
                lastName,
                email,
                password
            } = req.body;
            const _user = new User({
                firstName,
                lastName,
                email,
                password,
                username: Math.random().toString()
            })
            _user.save((err,user)=>{
                if(err){
                    return res.status(400).json({message: 'Something went wrong'})
                }
                if(user){
                    return res.status(201).json({
                        message: 'Admin created succesfully'
                    })
                }
            })
        
        
    })
}
