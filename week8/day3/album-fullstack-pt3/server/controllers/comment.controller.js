const Comment = require('../models/comments');
const jwt = require('jsonwebtoken')
module.exports = {
    postComment: async (req, res) => {
        try{
            console.log('HERER');
            const comment = req.body
            console.log(req.body);
            const user_id = req.user._id
            const username = req.user.username
            const album_id = req.params.id
            const finalizedComment = {...comment, user_id:user_id, album_id:album_id, username:username}
            console.log(finalizedComment);
            const newComment = await Comment.create(finalizedComment)
            res.json(newComment)
        }
        catch(err){
            res.status(500).json(err)
        }
    },
    deleteComment: async (req, res) => {
        try{
            console.log(req.params.id);
            const commentToBeDeleted = await Comment.deleteOne({_id:req.params.id})
            res.json({message:'Deleted Comment successfully'})
        }
        catch(err) {
            res.status(500).json(err)
        }
    }
}