/* 
    1) Declare an array named 'teaFlavors' that contains the strings
    "green tea", "black tea", and "oolong tea".
    Access the first element of the array and store it in a variable named
    'firstTea'.
*/

let teaFlavors = ["Green Tea", "Black Tea", "Oolong Tea"];
firstTea = teaFlavors[0];
console.log(teaFlavors);
console.log(firstTea);
let teaFl = new Array("Green Tea", "Black Tea", "Oolong Tea");
console.log(teaFl);

/* 
    2) Declare an array named 'Cities' containing "London", "Tokyo", "Paris"
    and "NY". Access the third element in the array and store it 
    in a variable named 'favoriteCity'.
*/

let cities = ["London", "Tokyo", "Paris", "NY"];
let favoriteCity = cities[2]
console.log(cities);
console.log(favoriteCity);

/* 
    3) You have an array named 'teaTypes' containing 
    'Herbal Tea', 'White Tea', and "Masala Chai". Change the second
    element of the array to "Jasmine Tea". 
*/

let teaTypes = ["Herbal Tea", "White Tea", "Masala Chai"];
console.log(teaTypes);
teaTypes[1] = "Jasmine Tea";
console.log(teaTypes);

/* 
    4) Declare an array named 'citiesVisited' containing "Mumbai",
    and "Sydney".
    Add "Berlin" to the array using the 'push' method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
console.log(citiesVisited);
citiesVisited.push("Berlin");
console.log(citiesVisited);
citiesVisited[3] = "Gorakhpur"
console.log(citiesVisited);

/* 
    5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
    Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["Chai", "Iced Tea", "Matcha", "Earl Grey"]
console.log(teaOrders);
const lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

/* 
    6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
    Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = ["Green Tea", "Oolong Tea", "Chai"]
let softCopyTeas = popularTeas
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = ["Berlin", "Singapore", "NY"];
let hardCopyCities = [...topCities] // Create a hardcopies
let hardCopyCity = topCities.slice()
hardCopyCity.push("India");
hardCopyCities.pop();
console.log(topCities);
console.log(hardCopyCities);
console.log(hardCopyCity);

// Rest and Set operators
//console.log([...topCities]);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);
console.log( worldCities);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = ["Masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length
console.log(menuLength);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);

/*

*/