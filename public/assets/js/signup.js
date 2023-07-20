const signupHandler = async (event) => {
    
    event.preventDefault();

    const username = document.querySelector('#username-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
    const confirmPassword = document.querySelector('#confirm-password-input').value.trim();

    if (password === confirmPassword) {
        const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert("successfully signed up!")
            document.location.replace('/');
        } else {
            alert("Username already taken or passwords do not match. Please try again.")
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupHandler);