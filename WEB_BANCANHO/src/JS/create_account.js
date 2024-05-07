function login() {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the values of the email and password input fields
  const email = document.getElementById('emailInput').value.trim();
  const password = document.getElementById('passwordInput').value;
  const confirmPassword = document.getElementById('confirmPasswordInput').value;
  const emailMessage = document.getElementById('emailMessage');

  // Clear any previous error messages
  emailMessage.innerHTML = '';

  // Check for empty fields
  let isEmpty = false;
  const inputFields = document.querySelectorAll('.input_login_password input');
  inputFields.forEach(input => {
    if (input.value.trim() === '') {
      isEmpty = true;
      emailMessage.innerHTML = 'Please fill in all required fields.';
      return false; // Exit the loop if any field is empty
    }
  });

  if (isEmpty) {
    return; // No need to perform further checks if fields are empty
  }

  // Validate email format using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailMessage.innerHTML = 'Please enter a valid email address.';
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    emailMessage.innerHTML = 'Passwords do not match.';
    return;
  }

  // Check if terms and conditions checkbox is checked
  const termsCheckbox = document.getElementById('termsCheckbox');
  if (!termsCheckbox.checked) {
    // Display alert message if the checkbox is unchecked
    alert("Please accept the terms and conditions before proceeding.");
    return; // Prevent further login processing
  }

  // All conditions met, perform successful login logic (replace with your actual logic)
  console.log('Login successful!'); // Replace with an alert or redirection

  // Redirect to homepage after successful login (assuming homepage.html exists)
  window.location.href = 'homepage.html';
}
