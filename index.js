function submitData(userName, userEmail) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,  // Corrected key names
            email: userEmail
        })
    })
    .then(response => response.json())  // Convert response to JSON
    .then(data => {
        const message = document.createElement("p");
        message.textContent = `User ID: ${data.id}`;
        document.body.appendChild(message);
    })
    .catch(error => {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        document.body.appendChild(errorMessage);
    });
}
