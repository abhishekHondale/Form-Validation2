document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    // Simple validation for phone number format
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number. and Number Only");
        return;
    }

    // Create the form data object
    const formData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        email: email,
        password: password
    };

    // Log the form data
    console.log(formData);
    alert("Form submitted! Check the console for data.");
});
