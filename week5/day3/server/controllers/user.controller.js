const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET_KEY
module.exports = {

    registerUser: async (req, res) => {
        const potentialUser = await User.findOne({email:req.body.email})
        if (potentialUser){
            res.status(400).json({error:{errors:'This email already exists'}})
        }
        else{
            try{
                const newUser = await User.create(req.body)
                const userToken = jwt.sign({_id: newUser._id, email:newUser.email}, SECRET)
                const expires = (new Date(Date.now() + 1000)).toUTCString()
                console.log(expires);
                // console.log('USERTOKEN',userToken);
                res.status(201)
                    .cookie('userToken', userToken, {httpOnly:true, maxAge: 900000})
                    .json({success: 'user logged in',userToken:userToken, newUser: newUser})
            }
            catch(err){
                // console.log(err);
                res.status(400).json({error: err})
            }

        }
    },

    loginUser: async (req, res) => {
        // console.log(req.body.email);
        const user = await User.findOne({email:req.body.email})
        // console.log('USERRRRRRRRRRRRRRRRRRRR ', user.password);
        if (!user){
            res.status(400).json({error:'Invalid Email/Password'})
        }
        try{
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password)
            // console.log(isPasswordValid);
            if(!isPasswordValid){
                res.status(400).json({error: 'Invalid Email/Password'})
            }
            else{
                const userToken = jwt.sign({_id: user._id, email:user.email}, SECRET)
                res.status(201)
                    .cookie('userToken', userToken, {httpOnly:true, maxAge: 900000})
                    .json({success: 'user logged in',userToken:userToken, user: user})
            }
        }
        catch(error){
            res.status(400).json({error:`something went wrong ${error}`})
        }
    },
    logout: (req, res) => {
        res.clearCookie('userToken')
        res.json({message:'User logged out'})
    },
    findOneUser: (req, res) => {
        User.findById({_id: req.params.id})
            .then(user => res.json({user:user}))
            .catch(err => console.log(err))
    }
}