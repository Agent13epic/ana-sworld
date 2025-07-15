// Authentication logic
const correctUsername = 'timmie';
const correctPassword = 'mybaby2008';

function login() {
    const username = document.getElementById('username').value.trim().toLowerCase();
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('error');
    
    if (username === correctUsername && password === correctPassword) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'home.html';
    } else {
        errorElement.textContent = 'Invalid username or password';
        errorElement.style.display = 'block';
    }
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
}

// Check authentication on page load
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('home.html')) {
        if (localStorage.getItem('loggedIn') !== 'true') {
            window.location.href = 'index.html';
        }
    }
});
