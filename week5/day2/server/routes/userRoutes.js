const userController = require('../controllers/userController')
const UserController = require('../controllers/userController')

module.exports = app => {
    app.get('/api/allUsers', UserController.allUsers),
    app.get('/api/oneUser/:id', userController.getOneUser),
    app.post('/api/createUser', UserController.createNewUser),
    app.delete('/api/deleteUser/:id', userController.deleteUser),
    app.put('/api/updateUser/:id', userController.updateUser)
}