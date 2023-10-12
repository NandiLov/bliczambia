function login() {
    // Get user input
    const username = document.querySelector('[name="username"]').value;
    const password = document.querySelector('[name="password"]').value;

    // Perform client-side authentication (not secure for production)
    if (username === 'demo' && password === 'password') {
        alert('Login successful');
        // Redirect to dashboard or perform other actions
    } else {
        alert('Login failed. Check your credentials.');
    }
}

function signup() {
    // Get user input
    const username = document.querySelector('[name="username"]').value;
    const email = document.querySelector('[name="email"]').value;
    const password = document.querySelector('[name="password"]').value;

    // Perform client-side user registration (not secure for production)
    alert('User registered: ' + username);
    // Redirect to login or perform other actions
}
