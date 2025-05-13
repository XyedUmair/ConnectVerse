// Only allow access if logged in
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
} else {
    alert("Welcome to ConnectVerse!");
}
// Restrict access to logged in users only
if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html";
}

// Toggle Sidebar
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Navigation
function goTo(page) {
    alert(`You clicked on ${page}`);
    // You can later redirect to different pages here
}

// Logout
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
