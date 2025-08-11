function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if (success) {
                resolve("Data fetcehd Successfully")
            } else {
                reject("Error fetching Data")
            }
        }, 3000)
    })
}

let response = fetchData()
console.log(response);


fetchData()
.then((data) => {
    console.log(data)
    return data
})
.then((value) => console.log(value))
.catch((error) => console.log(error))
