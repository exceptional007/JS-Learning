function sayHello() {
    console.log("I would like to say Welcome");
}

setTimeout(() => {
    sayHello()
}, 6000)

console.log("Starting Program");

for (let index = 0; index < 10; index++) {
    console.log(index);
}

// Event Loop
/*

-> Functions
-> Call Stack -> Event Loop -> Helper Hand (Browser/ node/ bun)
-> 2 Queue -> 

loaded in call stack
loop checks for any functions
if func req help it takes from browser such as timer func then passes
it to brwoser/ node env such as network calls such as node.js
after the execution moves to queue (regular, fast-paced)
event loop executes for elements inside the queues
Evenet loop checks everytime in the call stack.

*/