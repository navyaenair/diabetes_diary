document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate the form inputs
        const isUsernameValid = validateUsername(usernameInput.value);
        const isEmailValid = validateEmail(emailInput.value);
        const isPasswordValid = validatePassword(passwordInput.value);

        if (isUsernameValid && isEmailValid && isPasswordValid) {
            // If all inputs are valid, you can proceed with form submission (e.g., via AJAX)
            console.log('Form submitted successfully!');
        } else {
            console.log('Please correct the errors in the form.');
        }
    });

    function validateUsername(username) {
        // Add your username validation logic here
        // For example, check if the username is at least 3 characters long
        if (username.length >= 3) {
            return true;
        } else {
            alert('Username must be at least 3 characters long.');
            return false;
        }
    }

    function validateEmail(email) {
        // Add your email validation logic here
        // For example, check if the email format is valid
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            return true;
        } else {
            alert('Please enter a valid email address.');
            return false;
        }
    }

    function validatePassword(password) {
        // Add your password validation logic here
        // For example, check if the password is at least 6 characters long
        if (password.length >= 6) {
            return true;
        } else {
            alert('Password must be at least 6 characters long.');
            return false;
        }
    }
});
