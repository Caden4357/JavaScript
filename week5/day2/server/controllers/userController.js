const User = require('../models/user')

module.exports = {
    allUsers: (req, res) => {
        User.find({})
            .then((allUsers) => {
                res.json(allUsers)
            })
            .catch((err) => {
                console.log("All Users Failed", err);
                res.status(400).json(err)
            })
    },
    getOneUser: (req, res) => {
        User.findById({_id: req.params.id})
            .then(user => res.json({user:user}))
            .catch(err => console.log(err))
    },
    createNewUser: (req, res) => {
        User.create(req.body)
            .then((newUser) => {
                res.json(newUser)
            })
            .catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
    },
    updateUser: (req, res) => {
        User.findOneAndUpdate(
                {_id:req.params.id}, 
                req.body, 
                {new:true, runValidators:true}
            )
            .then(updatedUser => 
                res.json({user:updatedUser})
            )
            .catch((err) => {
                res.json({message:"Something went wrong", error:err})
            })
    },
    deleteUser: (req, res) => {
        User.deleteOne({_id: req.params.id})
            .then(result => {
                res.json({result: result})
            })
            .catch((err) => {
                res.json({message:"something went wrong", error:err})
            })
    }
}