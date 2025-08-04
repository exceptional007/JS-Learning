// Primitive : Call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail = undefined;
let userID;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 12312414123424234123412512n

// Reference Type (Non-Primitive) : Call by Reference

// Array, Objects, Functions

const heros = ["Shaktimaan", "Nagraj", "Doga"]
let muObj = {
    name : "hitesh",
    age : 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof anotherId)


/* Return Type of Variables 

    1) Primitive Datatypes
       
        Number => Number
        String => string
        Boolean => boolean
        null => object
        undefined => undefined
        Symbol => symbol
        BigInt => bigint

    2) Non-Primitve Datatypes

        Arrays => object
        Function => function
        Object => object

*/


// JS IS DYNAMICALLY-TYPED PRO. LANGUAGE


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "exceptionalakshhat"

let anotherName = myYoutubeName
anotherName = "chaiorcode"


console.log(anotherName)
console.log(myYoutubeName)

let userOne = {
    email : "user@googe.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Akshat@google.com"

console.log(userOne)
console.log(userTwo)