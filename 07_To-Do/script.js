const inputBox = document.getElementById("todo-input");
const listContainer = document.getElementById("todo-list");

function addTask() {
    if (inputBox.value === '') {
        return alert('Add a Task')
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// Function to save the list to the browser's local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML)
}

// Function to display the saved list from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

// load the tasks when page loads
window.onload = showTask