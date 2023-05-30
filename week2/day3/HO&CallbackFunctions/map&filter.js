
// Upload component snippet video to bonus playlist
const nums = [23,56,19,20,9,20,78,55,32,42,8,12,80]

const nbaAthletes = [
    {name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {name:'Mike James', league:'Euro',  position: 'Shooting Guard', active:true },
]

nbaAthletes.map(function(athlete, idx, wholeArr){
    console.log(athlete);
})

const activeNBAPlayers = nbaAthletes.filter(function(athlete){
    if(athlete.league !== 'NBA'){
        return true
    }
})
console.log(activeNBAPlayers);



const activeNBAPlayers2 = nbaAthletes.filter((athlete) => athlete.league === 'NBA' && athlete.active)
console.log(activeNBAPlayers2);

nums.forEach(function(num,idx,wholeArr){
    if(num > 21){
        console.log('You are old enough to drink');
    }else{
        console.log(num);
    }
})

nums.forEach((num,idx) => console.log(`NUM: ${num}, INDEX: ${idx}`))


