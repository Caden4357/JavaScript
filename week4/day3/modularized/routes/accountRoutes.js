const AccountController = require('../controllers/accountController')

module.exports = app => {
    app.get('/api/showAllAccounts', AccountController.allAccounts)
    app.get('/api/account/:id', AccountController.getOneAccount),
    app.post('/api/createAccount', AccountController.createNewAccount),
    app.delete('/api/deleteAccount/:id', AccountController.deleteAccount),
    app.put('/api/updateAccount/:id', AccountController.updateAccount)
}