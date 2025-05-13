// Show a welcome message
window.onload = function () {
    alert("Welcome to ConnectVerse!");
};


// Only allow access if logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
} else {
    alert("Welcome to ConnectVerse!");
}
