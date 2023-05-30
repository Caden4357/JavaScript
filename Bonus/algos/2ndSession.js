// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
// two loops 
// check first value against every other value in array to see if the sum of the two = target
// check if the two indexes exist in the output array if either two exist cannot progress further in second loop
// if both conditions are meant you need to save the two indicies in output and leave the second for loop 
// return output 
// let nums = [2,7,2,11,15,1,90,-2, 8]
// let target = 9
// let output = []
// for(let idxOne = 0; idxOne < nums.length; idxOne++){
//     for (idxTwo = idxOne+1; idxTwo < nums.length; idxTwo++){
//         if (nums[idxOne] + nums[idxTwo] === target){
//             if (idxOne in output || idxTwo in output){
//                 // console.log('BREAK')
//                 break
//             }
//             else if(nums[idxOne] + nums[idxTwo] === target){
//                 output.push(idxOne)
//                 output.push(idxTwo)
//             }
//         }
//     }
// }
// console.log(output)

// let num = 101
// let arrString = Array.from(String(num))
// let arr = arrString.map(n => Number(n))
// console.log(arr)

// loop through a string and console.log every character in the string 

const loopThroughString = (str) => {
    for (let index = 0; index < str.length; index++) {
        console.log(str[index])
    }
}
loopThroughString('racecar')


// Given a string, return true if the string is a palindrome, and false otherwise.
// Palindrome means the word is the same read backwards example mom, dad, racecar, kayak are all palindrome but racecars, fast, hug are examples that are not palindrome


let str = 'kayak'
let pointer = 0

const palindromev1 = (arrString) => {
    for (let i = arrString.length-1; i >= 0; i--){
        // console.log(arrString[i])
        if(arrString[i] === arrString[pointer]){
            pointer++
            // console.log('MATCH')
        }
        else{
            return false
        }
    }
    return true
}
console.log(palindromev1(str))


const palindromev2 = (arrString) => {
    for (let i = arrString.length-1; i >= 0; i--){
        // console.log(arrString[i])
        if(arrString[i] === arrString[pointer]){
            if(i === pointer){
                return true
            }else{
                pointer++
            }
        }
        else{
            return false
        }
    }
    return true
}
console.log(palindromev2(str))

