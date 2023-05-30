
class Human {
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email
    }
    // Methods
    printHumanInfo(){
        console.log(`Hi my name is ${this.name} I am ${this.age} years old and my email is ${this.email}`);
    }
    birthday(){
        this.age = this.age+1
        console.log(`Happy Birthday! you turned ${this.age} today`);
    }

}

class Student extends Human {
    constructor(name, age, email, stacks){
        super(name, age, email)
        this.stacks = stacks
    }
    printStacks(){
        console.log(`${this.name} is taking ${this.stacks} stack(s)`);
    }
}
class Instrucor extends Human{
    constructor(name, age, email, stacksTaught){
        super(name, age, email)
        this.stacksTaught = stacksTaught
    }
    printStacks(){
        console.log(`Instructor ${this.name} Teaches ${this.stacksTaught} stack(s)`);
    }
}

const caden = new Instrucor('Caden', 25, 'cwilcox@codingdojo.com', ['MERN', 'Python', 'Java'])
const alex = new Student('Alex', 23, 'alex@codingdojo.com', ['MERN', 'Python'])
alex.printStacks()
alex.birthday()
caden.printStacks()
// console.log(alex);
// console.log(caden);

// Function 
// function sayHi(){
//     console.log('HI');
// }

