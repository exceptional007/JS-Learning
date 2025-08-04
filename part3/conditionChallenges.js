// Checking if a number is greater than another number:

let num1 = 1
let num2 = 8

if ( num1 > num2 ) {
    console.log(" Num1 is greater than Num2")
} else {
    console.log(" Num1 is Smaller than Num2")
}

console.log(" I am regular Code")


// Checking if a string is equal to another string:

let username = "Chai"
let anotherUsername = "Chai"

if (username == anotherUsername) {
    console.log("User Name Verified")
} else {
    console.log("Username not Matched")
}

// Checking if a variable is a number or not:

let score = 44;

if (typeof score === 'number') {
    console.log("This is number")
} else {
    console.log("Not a number");
    
}


// Checking if a boolean value is true or false:

let isTeaReady = false

if (isTeaReady) {
    console.log("Tea is Ready");
} else {
    console.log("Tea is not Ready");
}

// Checking if an array is empty or not:

let items = []

console.log(items.length);


if (items.length == 0) {
    console.log("Array is Empty");
} else {
    console.log("Array is not Empty");
}