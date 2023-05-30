const students = [
    {name:'Gregg', currentStack: 'MERN', belt:'Red'},
    {name:'Macy', currentStack: 'MERN', belt:'Orange'},
    {name:'Tom', currentStack: 'MERN', belt:'Black'},
    {name:'Ashley', currentStack: 'MERN', belt:'Black'},
    {name:'Ashton', currentStack: 'Python', belt:'Orange'},
    {name:'Bob', currentStack: 'MERN', belt:'Red'},
    {name:'Fil', currentStack: 'Java', belt:'N/A'},
    {name:'Nancy', currentStack: 'MERN', belt:'N/A'},
    {name:'Brenda', currentStack: 'Java', belt:'Black'},
    {name:'Jason', currentStack: 'Python', belt:'Orange'},
    {name:'Parker', currentStack: 'Python', belt:'N/A'},
    {name:'Jenn', currentStack: 'Web Fundamentals', belt:'Yellow'},
]
// Given the list of students above determine and return how many have belted in there currentStack 
const beltedCurrentStack = (students) => {
    let studentsThatBelted = students.filter((student) => student.belt !== 'N/A')
    return studentsThatBelted.length
}
// console.log(beltedCurrentStack(students));
// Given the list of students above determine and return how many have belted in MERN
const beltedMern = (students) => {
    let studentsThatBelted = students.filter((student) => student.belt !== 'N/A' && student.currentStack === "MERN")
    return studentsThatBelted.length
}
// console.log(beltedMern(students));

// Given the list of students above determine and return how many have belted in whatever stack is given to the function
const belted = (students, stack) => {
    let studentsThatBelted = students.filter((student) => student.belt !== 'N/A' && student.currentStack === stack)
    return studentsThatBelted.length
}
console.log(belted(students, "Web Fundamentals"));
