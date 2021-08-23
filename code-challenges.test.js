// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their names capitalized.

// a) Create a test with an expect statement using the variable provided.

//Create a test function.
//  use describe() to pass in the name of the function, info
//  use it() to describe what info is doing
//      within it() write the test using expect and toEquals
//      test to make sure it returns the expected output
//END

 describe("info", () => {
  var people = [
    { name: "ford prefect", occupation: "hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "radio employee" }
  ]

   it("Takes in an array of objects and returns an array with a sentence about each person with their names capitalized.", () => {
       expect(info(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."])

   })
 })

var people = [
  { name: "ford prefect", occupation: "hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]



// b) Create the function that makes the test pass.

//Create a function called info
//  parameters - an object of people
//  iterate through object
//  get the first letter of the persons first and last name and capitialize it
//  iterate through the object and store the 'name is a occuaption' as a string in an array
//  return that array
//END

const info = (object) => {
  var array = []
  
  for(const key in object){
    let temp = object[key].name.split(' ')
    temp.split('')
    for(let i = 0; i < temp.length; i++){
      
      //temp[i] = temp[i].split('')
      
      temp[0] = temp[0].toUpperCase();
      console.log(temp[0]);
      
    }
    object[key].name = temp.join('');
    array.push(`${object[key].name} is a ${object[key].occupation}.`);
  }
  console.log(array);
  return array
}

//console.log(info(people))

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remainders", () => {
  var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  
   it("Takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
       expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
       expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1])
   })
 })


 var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
 // Expected output: [ 2, 0, -1, 0 ]
 var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
 // Expected output: [ 2, 1, -1 ]


// b) Create the function that makes the test pass.

//Create a function called remainders
//  parameters -  an array of mixed data
//  iterate through the given array using map
//  check the type of the value, if it is a number do a modulo 3 on it and return it
//  return new array
//END

const remainders = (data) => {
  let filterd = data.filter(value => {
    if(typeof value === 'number'){
      console.log(value);
      return value
    }
  })
  console.log(filterd);
  return filterd.map(value => value % 3)
}

//console.log(remainders(hodgepodge1));

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cuber", () => {
  var cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  var cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  
   it("Takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
       expect(cuber(cubeAndSum1)).toEqual(99)
       expect(cuber(cubeAndSum2)).toEqual(1125)
   })
 })


var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

//Create a function called cuber
//  parameters - array of nums
//  create a variable to hold the sum
//  iterate through the array cube the value and add it to the sum
//  retun the sum variable
//END

const cuber = (nums) => {
  let sum = 0
  for(let i = 0; i < nums.length; i++){
    sum += Math.pow(nums[i],3)
  }
  return sum
}