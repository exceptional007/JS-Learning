function fetchUserdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({name: "ChaiCode", url: "https://chaicode.com"})
        }, 3000)
    })
}

async function getUserdata() {
    try {
        console.log("Fetching User Data...");
        const userData = await fetchUserdata()
        console.log("User Data fetched Successfully");
        
        console.log("User Data: ",userData);
    } catch (error) {
        console.log("Error fetching data", error);
    }
}

getUserdata()