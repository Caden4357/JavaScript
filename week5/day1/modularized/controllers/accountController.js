
let accounts = [
    {id:1, nameOnAccount:'Ashley', accountNumber:'123-456-789', checking:500, savings:4000},
    {id:2, nameOnAccount:'Robert', accountNumber:'234-567-891', checking:300, savings:200},
    {id:3, nameOnAccount:'Macy', accountNumber:'345-678-912', checking:2000, savings:5000}
]

module.exports = {
    allAccounts: (req, res) => {
        res.json(accounts)
    },
    getOneAccount: (req, res) => {
        let id = req.params.id
        let accountToShow = accounts.filter((account) => account.id == id)
        if(accountToShow.length > 0){
            res.json(accountToShow)
        }else{
            res.json({message:'That account doesnt exist'})
        }
    }, 
    createNewAccount: (req, res) => {
        console.log("********REQ.BODY********===>", req.body);
        const newAccount = req.body
        accounts.push(newAccount)
        res.json(accounts)
    },
    updateAccount: (req, res) => {
        let id = req.params.id
        let newAccountList = accounts.map((account) => {
            if(account.id == id){
                account = req.body
            }
            return account
        })
        accounts = newAccountList
        res.json(accounts)
    },
    deleteAccount: (req, res) => {
        let id = req.params.id
        let updatedAccountList = accounts.filter((account) => account.id != id)
        accounts = updatedAccountList
        res.json(accounts)
    }
}