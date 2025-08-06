/*
    1) Write a 'while' loop to calculate the sum from 1 to 5.
 */

let sum = 0;
let i = 1;

while (i<=5) {
    sum+=i;
    i++;
}

console.log(sum);

/* 
    2) Write a 'while' loop that counts down from 5 to 1
    and stores the numbers in an array named 'countDown'
*/

let countDown = []
let c = 5

while (c>=1) {
    countDown.push(c)
    c--;
}

console.log(countDown);

/* 
    3) Write a 'do while' loop that prompts a user to enter
    their favorite tea type until they enter "stop".
    Store each tea type in an array named 'teaCollection'.
*/

let teaCollection = []
let tea

do {
    tea = prompt(`Enter Your Fav. Tea (type "stop" to finish)`) // Run in Console of Browser
    if (tea !== "stop") {
        teaCollection.push(tea)
    }
} while (tea !== "stop");
console.log(teaCollection);

/*
    4) Write a 'do while' loop that adds numbers from 1 to 3
    and stores the result in a variable named 'total'.
*/

let total = 0
let k = 1

do {
    total+=k
    k++
} while ( k <= 3 );

console.log(total);

/*
    5) Write a 'for' loop that multiplies each element in
    the array '[2, 4, 6]' by 2 and stores the results
    in a new array named 'multipliedNumbers'.
*/

let numArray = [2, 4, 6]
let multipliedNumbers = []

for (let l = 0; l < numArray.length; l++) {
    multipliedNumbers.push( ( numArray[l] * 2 ) )
}

console.log(multipliedNumbers);

/*
    6) Write a 'for' loop that lists all the cities in the
    arrayy '["Paris", "NY", "Tokyo", "London"]' and stores
    each city in a new array named 'cityList',
*/

let cities = ["Paris", "NY", "Tokyo", "London"]
let cityList = []

for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity)
}

console.log(cityList);
