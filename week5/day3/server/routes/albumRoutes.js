const albumController = require('../controllers/album.controller')

module.exports = (app) => {
    app.get('/api/allAlbums', albumController.allAlbums),
    app.post('/api/newAlbum', albumController.createNewAlbum),
    app.get('/api/oneAlbum/:id', albumController.getOneAlbum),
    app.delete('/api/deleteAlbum/:id', albumController.deleteAlbum),
    app.put('/api/updateAlbum/:id', albumController.updateAlbum)
}