document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get input values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simple validation (you can add more complex validation if needed)
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
            return; // Prevent further execution
        }

        // Handle remember me checkbox
        const rememberMe = document.querySelector('input[type="checkbox"]').checked;

        // You can perform additional validation or processing here before submitting

        // Simulate a login process (replace with actual AJAX call to your backend)
        simulateLogin(username, password, rememberMe);
    });

    function simulateLogin(username, password, rememberMe) {
        // Simulate a login process (replace with actual AJAX call to your backend)
        // For demonstration purposes, just show alerts
        alert('Username: ' + username + '\nPassword: ' + password + '\nRemember Me: ' + rememberMe);

        // Example: Redirect to a dashboard page after successful login
        // window.location.href = 'dashboard.html';
    }
});
