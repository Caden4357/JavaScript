const mongoose = require('mongoose')
const validator = require('validator')


const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name must be 2 or more characters"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        unique: true,
        validate:(value) => {
            return validator.isEmail(value)
        }
    },
    age: {
        type: Number,
        required: [true, "Age is required"],
        min: [18, "You must be 18 or older to enter this site"]
    },
}, {timestamps:true})

const User = mongoose.model('User', UserSchema)

module.exports = User