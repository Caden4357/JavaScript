// * Destructuring Arrays

let names = ['Caden', 'Christina', 'Wes', 'Shantel']

// let [caden, christina, wes, shantel] = names

let [...copyOfNames] = names
// console.log(restOfNames);
// restOfNames.push('Taro')
// console.log(copyOfNames);
// console.log(names);
// console.log(caden, christina, wes, shantel);

let StudentMacy = {
    fName:"Macy",
    role:"Student",
    age:25,
    favHobbies:["Playing games", "Coding", "Hiking"]
}
StudentMacy = {...StudentMacy, city:'Seattle'}


// const {fName:macy, role, age, favHobbies:[hobbyOne, hobbyTwo]} = StudentMacy
// console.log(macy);

// StudentMacy = {...StudentMacy, name:'Macy May', age:30}
// console.log(StudentMacy);

const {city:hometown} = StudentMacy
console.log(hometown);

const numArray = [1,2,3,4,5]

const addToArray = (arr) => {
    arr.push(0)
    return arr
}
let updatedArr = addToArray(numArray)
console.log(updatedArr);

setTimeout(() => {
    console.log('Ran after 5 seconds');
}, 5000)