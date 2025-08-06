/*
    1) Write a 'for' loop that loops through the array
    '["Green Tea", "Black Tea", "Chai", "Oolong Tea"]' and
    stops the loop when it finds "chai".
    Store all teas before "chai" in a new array named
    'selectedTeas'.
 */

let teaChoice = ["Green Tea", "Black Tea", "Chai", "Oolong Tea"]
let selectedTeas = []

for (let teaIndex = 0; teaIndex < teaChoice.length; teaIndex++) {
    const tea = teaChoice[teaIndex];
    if (tea === "Chai") {
        break
    }
    selectedTeas.push(tea)
}

console.log(selectedTeas);

/* 
    2) Write a 'for' loop that loops through the array
    '["London", "NY", "Paris", "Berlin"]' and skips "Paris".
    Store the other cities in a new array named 
    'visitedCitites'.
*/

let cities = ["London", "NY", "Paris", "Berlin"]
let visitedCitites = []

for (let index = 0; index < cities.length; index++) {
    if (cities[index] === "Paris") {
        continue
    }    
    visitedCitites.push(cities[index])
}

console.log(visitedCitites);

/*
    3) -----
*/

let number = [1, 2, 3, 4, 5]
let smallNumbers = []

for (const num of number) {
    if (num === 4) {
        break
    }
    smallNumbers.push(num)
}

console.log(smallNumbers);

/*
    4) -----
*/

let teaChoice = ["Chai", "Green Tea", "Herbal Tea", "Black Tea"]
let preferredTeas = []

for (const tea of teaChoice) {
    if (tea === "Herbal Tea") {
        continue
    }
    preferredTeas.push(tea)
}

console.log(preferredTeas);

/*
    5) -----
 */

let citiesPopulation = {
    "London": 890000,
    "NY": 840000,
    "Paris": 220000,
    "Berlin": 350000
}

let cityPopulations = {}
for (const city in citiesPopulation) {
    if (city === "Berlin") {
        break
    }
    cityPopulations[city] = citiesPopulation[city]
}

console.log(cityPopulations);

/*
    6) -----
*/

let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000,
};

let largeCities = {}

for (const city in worldCities) {
    if (worldCities[city] < 300000) {
        continue
    }    
    largeCities[city] = worldCities[city]
}

console.log(largeCities);

/*
    7) -----
*/

let teaChoice = ["Earl Grey","Green Tea", "Chai", "Oolong Tea"]
let availableTeas = []

teaChoice.forEach((tea) => {
    console.log(tea);
    if (tea !== "Chai") {
        availableTeas.push(tea)
    }
});

// teaChoice.forEach(function(tea) {
//     console.log(tea);
//     if (tea !== "Chai") {
//         availableTeas.push(tea)
//     }
// });

console.log(availableTeas);

/*
    8) -----
*/

let myWorldCities = ["Berlin", "Tokyo" ,"Sydney", "Paris"]
let traveledCities = []

myWorldCities.forEach(city => {
    if (city === "Sydney") {
        return
    }
    traveledCities.push(city)
});
console.log(traveledCities);


/*
    9) -----
*/

let number = [2, 5, 7, 9]
let doubledNumbers = []

for (let num = 0; num < number.length; num++) {
    if (number[num] === 7) {
        continue
    }
    doubledNumbers.push( number[num] * 2 )
}
console.log(doubledNumbers);


/*
    10) -----
*/

let teaChoice = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]
let shortTeas = []

for (const tea of teaChoice) {
    if (tea.length > 10) {
        break
    }
    shortTeas.push(tea)
}

console.log(shortTeas);
