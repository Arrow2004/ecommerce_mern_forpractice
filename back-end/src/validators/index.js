const { check,validationResult } = require('express-validator')
exports.validatorSignUP = [
    check('email').isEmail().withMessage('Valid email is required'),
    check('firstName').not().isEmpty().withMessage('Firstname is required'),
    check('lastName').not().isEmpty().withMessage('Lasttname is required'),
    check('password').not().isEmpty().withMessage('Password is required')
]
exports.ValidReq = (req,res,next)=>{
    const {errors} = validationResult(req)
    if(errors.length!=0){
        return res.status(400).json(errors[0].msg)
    }
    next()
}