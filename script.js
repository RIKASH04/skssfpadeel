document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the input values
        const username = form.querySelector("input[type='text']").value;
        const password = form.querySelector("input[type='password']").value;

        // Basic validation
        if (username === "" || password === "") {
            alert("Please fill in both fields.");
            return;
        }

        // Simulate a successful login (replace this with your actual login logic)
        if (username === "skssf" && password === "5320") {
            alert("Login successful!");
            // Redirect to index.html or another page
            window.location.href = "login.html"; // Change this to your desired URL
        } else {
            alert("Invalid username or password.");
        }
    });
});
