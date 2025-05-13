document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials (you can later replace this with real backend)
    if(username === "user" && password === "pass123") {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html"; // redirect to homepage
    } else {
        alert("Invalid credentials. Try again!");
    }
});

