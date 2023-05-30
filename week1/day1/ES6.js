// Global, function and block scope 

// ! The global scope is the scope that contains, and is visible in, all other scopes

var cadensName = "Caden Wilcox";

console.log(cadensName);

// ! Function scope variables are only accessable inside the function they are declared in (a nested function would have access to variables declared in the parent function)
const sayHi = () => {
    var newName = 'Chris'
    console.log('Hi', newName);
}
console.log(newName);
sayHi()

// ! Block scope a block is defined by a set of curly brackets

// Yes you can declare a block like this but its not typical 
// {
//     let age = 25
//     console.log(age);
// }
// console.log(age);
var random = 'string'
// ! typically your blocks will be created by functions and conditionals
const logNums = (nums) => {
    for (var idx = 0; idx < nums.length; idx++) {
        // const element = nums[idx];
        console.log(`the num is ${nums[idx]} at index ${idx} `);
    }
    console.log('final index', idx);
}
logNums([1,2,3,4,5]);
console.log(random);


let personOne = "Instructor Caden";
personOne = 'new name'


console.log(personOne);

if (personOne === "Instructor Caden"){
    let personOne = "Bob Ross";
    console.log('**************',personOne);
}

console.log(personOne);

// * const variables. think constant they cannot change! you will get an error 🤯
const person = {
    name: "Robert Smith",
    age: 32,
    isMusician: true,
}

person.age = 23;
console.log(person.age);

let luke = "Luke Skylwalker";

luke = "Hans Solo";
console.log(luke);





// * Arrow functions
// const sayHi = () => console.log("Hello from the arrow function");
// sayHi();

const multiply = (a,b) => {return a*b}
console.log(multiply(12,2));

let switchState = false

const toggleSwitch = () => {
    if (switchState == false){
        switchState = true;
    }
    else{
        switchState = false
    }
    return switchState
}

// toggleSwitch(switchState);
switchState = toggleSwitch();
console.log(switchState);




let evenNums = [2,4,6,8,10];

let names = ['Caden', 'Ben', 'Amy', 'Lindsey'];
let newName = 'Josie';
// let [,name1,,name2] = names
// console.log(name1, name2);

// let [,,...someNames] = names
// console.log(...names); 

const StudentMacy = {
    name:"Macy",
    role:"Student",
    age:25,
    favHobbies:["Playing games", "Coding", "Hiking"]
}
const {favHobbies:hobbies, name:fName, ...restOfObject} = StudentMacy
console.log(fName,hobbies);

console.log(restOfObject);

