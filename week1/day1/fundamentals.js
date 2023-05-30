
// * Review of data types 

// * String
let myName = "Caden";

// * Number 
let myAge = 25;

// * Still a Number in JS
let pi = 3.14;

// * Boolean
let isHuman = true;

// * Null
let nothing = null;

// * Undefined
let nothing2;

console.log(nothing, nothing2);

nothing = 30;
nothing2 = "Dolphin";
console.log(nothing, nothing2);

// * Declaring an array. Notice the [] brackets, these are index based starting at 0
//  * We typically use arrays to contain the same data types but they CAN be mixed you will often see objects stored in arrays 
// *           0 1 2 3 4
let evenNums = [2,4,6,8,10];


let arrOfNames = ['Caden', 'Ben', 'Amy', 'Lindsey'];

// * Declaring an object. Notice the {} 
// * Access values through key:value pairs! keys are on the left values on the right
let StudentMacy = {
    name:"Macy",
    role:"Student",
    age:25,
    // favHobbies:["Playing games", "Coding", "Hiking"]
}

let employeeAshton = 
{
    name: "Ashton",
    role:"Instructor",
    age:42,
    isHuman:true,
    favHobbies:['Learning new technologies', 'Playing with the dogs', 'Playing volleyball'],
    lectureSchedule:{
        week1:{
            day1:"HTML",
            day2:"CSS",
            day3:"Flex-box",
        },
        week2:{
            day1:"JS intro",
            day2:"JS on the browser",
            day3:"belt prep demo",
        },
        week3:{
            day1:"Terminal, JS arrays and objects",
            day2:"Github",
            day3:"API's",
        },
    }
}

// * if, else if and else syntax 
if(myAge >= 18){
    console.log('You are old enough welcome in to the club');
}
else{
    console.log('Sorry you must be 18 or older to enter the club');
}

const highSchoolGrad = true;

if (highSchoolGrad){
    console.log('You can enroll in this bootcamp');
}
else{
    console.log('Sorry you must graduate high school or receive your GED first');
}

let weekday = "Friday"

if (weekday == "Friday"){
    console.log("Woohoo its the weekend!");
}else if(weekday == "Saturday"){
    console.log("One more day to relax!");
}else{
    console.log("Time to work!");
}

// * for loop syntax 
for (let i = 0; i <= 10; i++){
    console.log(i)
}
// ! what will the output be?




// * looping through an array 
for (let index = 0; index < evenNums.length; index++) {
    console.log(evenNums[index]); 
}



// * function syntax

function sayHi() {  
    console.log("Hello World!");
}


function multiply(num1, num2){
    // ! explain to me the difference between return and console.log
    return num1 * num2
}
let multiplyResult = multiply(2,4);

// * functions with ES6 
const sayHi = () => {
    console.log('hi');
}

const multiply = (num1, num2) => {
    return num1+num2
}
const multiply = (num1, num2) => num1*num2


console.log(multiply(2,3));
