const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({

    albumName: {
        type: String,
        required:[true, 'Album name is required'],
        minlength: [2, "Album Name must be at least 6 characters long"],
        maxlength: [45, "Album Name must be less than 45 characters long"]
    },

    artist: {
        type: String,
        minlength: [2, "Artist Name must be at least 6 characters long"],
        maxlength: [45, "Artist Name must be less than 45 characters long"]
    },

    releaseYear:  {
        type: Number,
        min: [1900, "Release year cannot be before 1900"]
    },

    genre: {
        type:String,
        enum: ['Alternative', 'Rock', 'Country', 'Metal', 'Hip-Hop/Rap', 'Jazz', 'Blues', 'Classical', 'Soundtrack']
    },

    explicit: {
        type: Boolean,
        required: [true, 'Explicit is required']
    }
})

const Album = mongoose.model('Album', AlbumSchema)
module.exports = Album