const jwt = require('jsonwebtoken')


exports.signinRequire = (req,res,next)=>{
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next()
}
exports.userMiddlware = (req,res,next)=>{
    if(req.user.role!=='user'){
        return res.status(400).json({
            message: "Acces dinied",
        })
    }
    next()
}
exports.adminMiddlware = (req,res,next)=>{
    if(req.user.role!=='admin'){
        return res.status(400).json({
            message: "Acces dinied",
        })
    }
    next()
}