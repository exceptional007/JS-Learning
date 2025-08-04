// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 9, 5)
// let myCreatedDate = new Date(2023, 9, 5, 5, 3)
// let myCreatedDate = new Date("2023-11-06")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Date.now()/1000)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))
