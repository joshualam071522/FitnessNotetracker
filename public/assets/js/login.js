const loginHandler = async (event) => {
    
    event.preventDefault();

    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (username && password) {
        const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');

        } else {
            alert("Incorrect Username or Password. Please try again.")
        }
    }
}

document.querySelector('#login-form').addEventListener('submit', loginHandler);