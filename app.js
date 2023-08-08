
/*
for (let i = 1; i <= 20; ++i) {
    if (i % 3 === 0 && i % 5 === 0){
    console.log('Frontend Simplified')
}
    else if (i % 3 === 0) {
        console.log('Frontend')
    }
    else if (i % 5 === 0) {
        console.log('Simplified')
    }
} 


const str = "Frontend Simplified"

for (let i = 0; i < str.length; ++i) {
    console.log(str[i])
}

const sentence = "Hello, world!";
for (let i = 0; i < sentence.length; ++i) {
    console.log(sentence[i]);
}

function sumOfTwoNumbers (a, b) {
    return a * b
}

console.log(sumOfTwoNumbers(5, 14))


function convertCelsius (celsius) {
    return celsius * 1.8 + 32 
}

console.log(convertCelsius(0))
console.log(convertCelsius(10))
console.log(convertCelsius(30))


const convertCelsius = (celsius) => {
    return celsius * 1.8 + 32
}


let arr = [1 , 2, 3, 4, 5]

//First element of array
console.log(arr[0])

//Last element of array
console.log(arr[arr.length - 1])

//Shorter version of array

let newArr = arr.filter(element => element < 50)

console.log(newArr)

*/

//**Filter out all the 'FAIL' elements in an array
//**without using the Array.filter method

let grades = ['A+', 'A', 'FAIL']

let goodGrades = []

for (let i = 0; i < grades.length; ++i) {
if (grades[i] !== 'FAIL') {
    goodGrades.push(grades[i]);
}
}

console.log(goodGrades);


/* Using filter 

let goodGrades = grades.filter(element => element !== 'FAIL')

console.log(goodGrades) */

//Array map basic


let arr = [1, 4, 9, 16]

let newArray = arr.map(element => 'dog')

console.log(newArray)


//Turn each element in an array of dollars into cents

let dollars = [1, 5, 10, 3, 0, 10, 20];

/*
//long method
let cents = dollars.map((element) => {
return element * 100
})

//short
let cents = dollars.map(element => element * 100)
*/

//Using for loop (brute force)
 
let cents = [];

for (let i = 0; i < dollars.length; ++i) {
   cents.push(dollars[i] * 100)    
}

    console.log(cents)



