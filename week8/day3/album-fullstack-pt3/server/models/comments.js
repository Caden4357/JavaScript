const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment:{
        type:String,
        required:[true, 'This field is required']
    },
    user_id:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    album_id:{
        type: mongoose.Types.ObjectId,
        ref: 'Album'
    },
    username:{
        type:String
    }
})
module.exports = mongoose.model("Comment", CommentSchema)