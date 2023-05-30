const express = require("express");
const app = express();
const port = 8000;
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


let accounts = [
    {id:1, nameOnAccount:'Ashley', accountNumber:'123-456-789', checking:500, savings:4000},
    {id:2, nameOnAccount:'Robert', accountNumber:'234-567-891', checking:300, savings:200}
]

// * Get all accounts  
app.get('/api/showAllAccounts', (req, res) => {
    // console.log(res);
    res.json(accounts)
})

// * Get one account by id
app.get('/api/account/:id', (req, res) => {
    let id = req.params.id
    accountToShow = accounts.filter((account) => account.id == id)
    if(accountToShow.length > 0){
        res.json(accountToShow)
    }else{
        res.json({message: 'That account does not exist'})
    }
})


// * Create a new account
app.post('/api/accounts/new', (req, res) => {
    console.log("********REQ.BODY********===>", req.body);
    const newAccount = req.body
    accounts.push(newAccount)
    res.json(accounts)
})

// * Update account by id
app.put('/api/updateAccount/:id', (req, res) => {
    console.log(req.params.id);
    const newAccountList  = accounts.map((user) => {
        if (user.id == req.params.id){
            console.log("Here");
            user = req.body
            console.log(req.body);
        }
        return user
    })
    accounts = newAccountList
    res.json(accounts)
})

// * Delete account by id
app.delete('/api/deleteAccount/:id', async (req, res) => {
    // const response = await fetch('')
    // ! params come in as a string so strict comparison will not work (!==) unless you convert to a number 
    // console.log(typeof(req.params.id));
    // console.log(typeof(users[0].id));
    const updatedAccountsList = accounts.filter(user => user.id != req.params.id)
    console.log(updatedAccountsList);
    accounts = updatedAccountsList
    res.json(accounts)
})


// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

