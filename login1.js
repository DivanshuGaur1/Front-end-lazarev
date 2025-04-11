// Function to validate Gmail address format
function validateGmail(email) {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return gmailRegex.test(email);
}

// Function to validate password criteria
function validatePassword(password) {
    // Example criteria: Password must be at least 8 characters long
    return password.length >= 8;
}

// Form submit handler
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Reset error messages
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    let valid = true;

    // Validate Gmail address
    if (!validateGmail(emailInput)) {
        emailError.textContent = 'Please enter a valid Gmail address.';
        emailError.style.display = 'block';
        valid = false;
    }

    // Validate password criteria
    if (!validatePassword(passwordInput)) {
        passwordError.textContent = 'Password must be at least 8 characters long.';
        passwordError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        alert('Login successful!');
    }
}
