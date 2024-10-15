const loginContainer = document.getElementById('login-container');
const registerContainer = document.getElementById('register-container');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginForm.addEventListener('submit', handleLogin);
registerForm.addEventListener('submit', handleRegister);
loginLink.addEventListener('click', showLogin);
registerLink.addEventListener('click', showRegister);

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ... (existing login logic) ...
}

function handleRegister(event) {
    event.preventDefault();

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // ... (register logic, including database insertion) ...
}

function showLogin() {
    loginContainer.style.display = 'block';
    registerContainer.style.display = 'none';
}

function showRegister() {
    loginContainer.style.display = 'none';
    registerContainer.style.display = 'block';
}
