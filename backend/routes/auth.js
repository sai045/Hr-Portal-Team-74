const express=require('express');
const router = express.Router();
const auth= require('../Middleware/auth');
const gravatar = require('gravatar');
const {check, validationResult }= require('express-validator');
const bcrypt =require('bcryptjs');
const config= require('config');
const jwt = require('jsonwebtoken');

const User= require('../models/User');
const { exists } = require('../models/User');

router.get('/',auth,async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select('-password');
        return res.json(user);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/',[
   check('email','Enter valid email id').isEmail(),
   check('password','Password is required')
    .exists()
],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const { email, password}=req.body;

     try{ 
      let user= await User.findOne({email});
    
        if(!user){
           return res.status(400).json({ msg: "Invalid Credentials"})
         }

    const avatar=gravatar.url(email,{
        s:'200',
        r: 'pg',
        d: 'mm'
    })

    const isMatch= await bcrypt.compare(password,user.password);

    if(!isMatch){
        return res.status(400).json({errors:[{msg:"Invalid Password"}]});
    }

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