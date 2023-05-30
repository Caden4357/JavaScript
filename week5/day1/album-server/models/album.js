const mongoose = require('mongoose')

const AlbumSchema = new mongoose.Schema({

    albumName: {
        type: String
    },

    artist: {
        type: String
    },

    releaseYear:  {
        type: Number
    },

    genre: {
        type:String,
        enum: ['Alternative', 'Rock', 'Country', 'Metal', 'Hip-Hop/Rap', 'Jazz', 'Blues', 'Classical', 'Soundtrack']
    },

    explicit: {
        type: Boolean
    }
})

const Album = mongoose.model('Album', AlbumSchema)
module.exports = Album