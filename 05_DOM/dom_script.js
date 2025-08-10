// example 1

document.getElementById('changeTextButton').
addEventListener('click', function ()  {
    let paragraph = document.getElementById("myParagraph")
    paragraph.textContent = "The pargraph is changed"
})

// example 2

// Traversing the DOM:

document.getElementById("highlightFirstCity").
addEventListener('click', function () {
    let hold = document.getElementById("citiesList")
    console.log(hold);
    citisList.firstElementChild.classList.add('highlight');
    
})

// example 3

document.getElementById("changeOrder").addEventListener('click', function () {
    let coffeType = document.getElementById("coffeeType")
    coffeType.textContent = "Espresso"
    coffeType.style.backgroundColor = "brown"
    coffeType.style.padding = "5px"
})


// exampple 4

document.getElementById('addNewItem').addEventListener
('click', function () {
    let newItem = document.createElement('li')
    newItem.textContent = "Eggs" 
    document.getElementById("shoppingList").appendChild
    (newItem)
})

// example 5

document.getElementById("removeLastItem").addEventListener
('click', function () {
    let taskList = document.getElementById("taskList")
    taskList.lastElementChild.remove();
})

// example 6

document.getElementById("clickMeButton").addEventListener
("dblclick", function () {
    alert("Chai Window")
})

// example 7

document.getElementById("teaList").addEventListener
('click', function (event) {
    console.log(event.target);
})
