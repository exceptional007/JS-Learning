const name = "Akshat "
const repoCount = 8

// console.log(name + repoCount + " Value") Outdated Way 

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`) // String Interpolation

const gameName = new String('Akshat-EX-Com-Repo-Github')

// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('t'))
const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const newStringOne = "     Virat    "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://akshat.com/akshat%20exceptional"

console.log(url.replace('%20', ''))
console.log(url.includes('akshat'))
console.log(gameName.split('h'))

