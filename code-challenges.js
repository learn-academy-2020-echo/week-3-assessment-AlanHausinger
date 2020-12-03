// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
// function will take in a num
const sequence = (nums) => {
  // let array = array of 1, 1
  let fibArray = [1, 1]
  // loop starting at 1 and stops just before whatever nums -1 and reiterates
  // by 1 everytime
  for (let i=1; i < nums -1 ; i++) {
    //array is pushed out as two arrays added together
                        //1            +     1
    fibArray.push(fibArray[i] + fibArray[i - 1])
  }
  return fibArray
}
console.log(sequence(4));
// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

const onlyNums = (array)=>{
  let filteredArray = array.filter(value=> {
    return (typeof value === "number" && value % 2 !==0)
  })
      return filteredArray.sort((a,b)=>a-b)
    }

console.log(onlyNums(fullArr1));
console.log(onlyNums(fullArr2));


// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.
var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”


const mLettersOnly = (str) => {
// create variable that holds the string argument converted to an array
  let strArray = str.split("")
// create variable that holds the middle
  let middle = strArray[Math.floor(strArray.length / 2)]
// if string has an even number of characters
if (strArray.length % 2 === 0){
  // create variable to hold the index of the first of the middle two numbers
  let ftwoMiddle = strArray.length / 2 - 1
  // return two middle letters
  return strArray[ftwoMiddle] + middle
} else {
  return middle
}
// } else {
  // if string has an odd number of characters return middle letter only

}
console.log(mLettersOnly(middleLetters1));
console.log(mLettersOnly(middleLetters2));



// --------------------4) READ CAREFULLY: Create a CLASS to get the area of a sphere. Create THREE spheres with different radi as test cases. Area of a sphere =  4πr^2 (four * pi * radi squared)
// create a function that accepts a string as an argument
  class Sphere{
    // constructor holds radius as an argument
    constructor(radius){
      this.radius = radius
    }

    areaCalc(){
      return 4 * 3.14159 * (this.radius * this.radius)
    }
  }


// call the function 
// if (strArray.length %)
const sphere1 = new Sphere(3)
const sphere2 = new Sphere(10)
const sphere3 = new Sphere(18)

console.log(sphere1.areaCalc());
console.log(sphere2.areaCalc());
console.log(sphere3.areaCalc());
// I'm not gonna lie I had amanda and ryan help me out so I could understand this question more but it was really difficult for me
// to understand this concept.


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

// build a function that takes an array of numbers as an argument
const arrayArguement = (array) => {
  let result = 0
  // map through
  let mappedArray = array.map(value => {
    return (result = result + value)
  })
  return mappedArray
}
console.log(arrayArguement(numbersToAdd1));
console.log(arrayArguement(numbersToAdd2));
console.log(arrayArguement(numbersToAdd3));
