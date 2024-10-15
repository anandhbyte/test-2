const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Handle successful login (e.g., redirect to a dashboard)
            window.location.href = '/dashboard';
        } else {
            // Handle login failure (e.g., display an error message)
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
