// function promiseExample (password){
//     return new Promise((resolve, reject) => {
//         if (password === 'I love anime'){
//             resolve('That is the secret word welcome to animeClub')
//         }else{
//             reject('Sorry that is incorrect you cannot enter the secret club')
//         }
//     })
// }
const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     console.log('hi');
    // }, 200)
    let password = 'I love sports'
    if (password === 'I love anime'){
        resolve('That is the secret word welcome to animeClub')
    }else{
        reject('Sorry that is incorrect you cannot enter the secret club')
    }
})
promise
    .then((message) => console.log(message))
    .catch((err) => console.log(err))

console.log('Hola');


let trashGotTakenOut = true
const takeOutTheTrash = new Promise((resolve, reject) => {
    if(trashGotTakenOut){
        resolve('Thanks for taking out the trash!')
    }
    else{
        reject('You didnt take out the trash 😢')
    }
})
takeOutTheTrash
    .then(message => console.log(message))
    .catch(err => console.log(err))


let day = 'Thursday'
const weekday = new Promise((resolve, reject) => {
    if (day === 'Friday'){
        resolve('Woohoo! its Friday')
    }
    else if (day === 'Saturday'){
        resolve('Its still the weekend!')
    }
    else if (day === 'Sunday'){
        resolve('Last day of the weekend')
    }
    else{
        reject('Just another work day')
    }
})
weekday
    .then(message => console.log(message))
    .catch(err => console.log(err))

function getNbaAthletes (request) {
    return new Promise((resolve, reject) => {
        if (request === 'NBA'){
            resolve([
                {name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
                {name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
                {name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
                {name:'Shaq', league:'NBA',  position: 'Center', active:false },
                {name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
            ])
        }else{
            reject({message: 'Sorry we dont understand that request try again', hint: 'Try "NBA" as your request'})
        }
    })
}
getNbaAthletes('ASdf')
    .then(data => console.log(data))
    .catch(err => console.log(err))