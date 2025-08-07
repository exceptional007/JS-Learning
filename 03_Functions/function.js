/*
    1) -----
*/

function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`
}

let teaOrder = makeTea("Green Tea")
console.log(teaOrder);

/*
    2) -----
*/

function orderTea(teaType) {
    function confirmOrder() {
        return `Order Confirmed for Chai`
    };
    return confirmOrder()
}

let orderConfirmation = orderTea("Chai")
console.log(orderConfirmation);

/*
    3) -----
*/

// const calculateTotal = (price, quantity) => {
//     return price * quantity
// }
const calculateTotal = (price, quantity) => price * quantity // Explicit Return

let totalCost = calculateTotal(12, 20)
console.log(totalCost);

/*
    4) -----
*/

function makeTea(typeOfTea) {
    return `makeTea: ${typeOfTea}`
}

function processTeaOrder(teaFunction) {
    return teaFunction("Earl Grey")
}

let order = processTeaOrder(makeTea) //Higher Order Function: First Class Function, func are treated as any other variable
// // func can be passed as an argument & can be returned by another function & can be assigned value to any variable
console.log(order);

/*
    5) -----
*/

function createTeaMaker(name) {
    return function (teaType) {
        return `${name} Making ${teaType}`;
    };
}

let teaMaker = createTeaMaker("Virat")
let result = teaMaker("Green Tea")
console.log(result);

