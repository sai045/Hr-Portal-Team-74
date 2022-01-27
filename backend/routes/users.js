const express = require('express');
const router = express.Router();
const {check, validationResult }= require('express-validator');
const gravatar = require('gravatar');
const bcrypt =require('bcryptjs');
const config= require('config');
const jwt = require('jsonwebtoken');

const User=require('../models/User');

router.post('/',[
    check('name','Name is required')
    .not()
    .isEmpty(),
   check('email','Enter valid email id').isEmail(),
   check('password','Please enter password with 8 or more characters')
    .isLength({min:8})
],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const {name, email, password}=req.body;

     try{ 
      let user= await User.findOne({email});
    
        if(user){
           return res.status(400).json({ msg: "User already exists"})
         }

    const avatar=gravatar.url(email,{
        s:'200',
        r: 'pg',
        d: 'mm'
    })
    
    user= new User({
        name,email,avatar,password
    });
    
    const salt = await bcrypt.genSalt(10);
    user.password= await bcrypt.hash(password, salt);

    const result = await user.save();

    const payload = {
        user:{
            id:user.id
        }
    }
    jwt.sign(payload,config.get('jwtSecret'),
    (err,token)=>{
        if(err) throw err;
        res.json({token});
    });
    
} catch(err){
    console.error(err.message);
    return res.status(500).json('Server error')
}

});

module.exports = router;