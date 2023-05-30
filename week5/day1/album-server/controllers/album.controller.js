const Album = require('../models/album')

module.exports = {
    allAlbums: async (req, res) => {
        try{
            const response = await Album.find({})
            res.status(200).json(response)
        }
        catch(err){
            res.status(500).json({message: 'There was an error', error:err})
        }
    },
    // allAlbums: (req, res) => {
    //     Album.find()
    //         .then((albums) => {
    //             res.json(albums)
    //         })
    //         .catch((err) => {
    //             res.json({message: 'There was an error', error:err})
    //         })
    // },
    getOneAlbum: async (req, res) => {
        try {
            const id = req.params.id
            const oneAlbum = await Album.findById(id)
            res.status(200).json(oneAlbum)
        } 
        catch (err) {
            res.status(500).json({message: 'There was an error', error:err})
        }
    },
    postAlbum: async (req, res) => {
        try{    
            const response = await Album.create(req.body)
            console.log('RESPONSE', response)
            res.status(201).json(response)
        }
        catch(err){
            res.status(500).json({message: 'There was an error', error:err})
        }
    },
    // postAlbum: (req, res) => {
    //     Album.create(req.body)
    //         .then((newAlbum) => {
    //             res.json({newAlbum: newAlbum})
    //         })
    //         .catch((err) => {
    //             res.json({message: 'There was an error', error:err})
    //         })
    // }
    updateAlbum: async (req, res) => {
        try{
            const id = req.params.id
            const updatedAlbum = await Album.findOneAndUpdate({_id: id}, req.body, {new:true, runValidators:true})
            res.status(200).json(updatedAlbum)
        }
        catch (err) {
            res.status(500).json({message: 'There was an error', error:err})
        }
    },
    deleteAlbum: async (req, res) => {
        try{
            const id = req.params.id
            const response = await Album.deleteOne({_id: id})
            res.status(200).json(response)
        }
        catch (err){
            res.status(500).json({message: 'There was an error', error:err})
        }
    }
}