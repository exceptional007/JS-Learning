let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`
    },
}

// console.log(car.start());

function Person(name, age) {
    this.name = name
    this.age = age
}

let john =  new Person("John Boe", 20)
// console.log(john.name);

function Animal(type) {
    this.type = type
}

// Prototype Chaining

Animal.prototype.speak = function () {
    return `${this.type} makes a sound`
}

Array.prototype.hitesh = function () {
    return `Custom Method ${this}`
}

let myArray = [1, 2, 4]
// console.log(myArray.hitesh());

let myNewArray = ["A", 2, 3]
// console.log(myNewArray.hitesh());

class Vehicle {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is Car from ${this.make}`
    }
}

class Car extends Vehicle {
    drive(){
        return `${this.make} : This is an inheritance Example`
    }
}

let myCar = new Car("Tata", "Harrier")
// console.log(myCar.start());
// console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla")
// console.log(vehOne.make);

// Encapsulation

class BankAccount {
    #balance = 0;
    deposit(amount) {
        this.#balance += amount
        return this.#balance;
    }

    getBalance(){
        return `$ ${this.#balance}`
    }
}

let account = new BankAccount()
// console.log(account.getBalance())

// Abstraction

class CoffeMachine {
    start(){
        // call DB
        // filter value
        return `Starting the machine....`
    }
    brewCoffee(){
        // complex calculation
        return `Brewing Coffee`
    }
    pressStartButton(){
        let msgOne = this.start()
        let msgTwo = this.brewCoffee()
        return `${msgOne} + ${msgTwo}`
    }
}

let myMachine = new CoffeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism

class Bird{
    fly() {
        return `Im Flying....`
    }
}

class Penguin extends Bird{
    fly() {
        return `Penguins Cant Fly`
    }
}

let newBird =  new Bird()
let pengu = new Penguin()

// console.log(newBird.fly());
// console.log(pengu.fly());

// static method

class Calculator{
    static add(a, b){       // can be called class itself
        return a+b
    }
}

// let miniCalc = new Calculator()
// console.log(Calculator.add(2, 3));

// Getter & Setter Method

class Employee {

    #salary;

    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary Cannot be Negative");
        }
        this.name = name
        this.#salary = salary
    }

    get salary(){
        return `You are not allowed to see salary`
    }

    set salary(value){
        if (value < 0) {
            console.error("Invalid Salary");
        } else {
            this.__salary = value
        }
    }
}

let emp = new Employee("ALice", -50000)
console.log(emp.__salary);
emp.salary = -50000
