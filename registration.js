$(document).ready(function() {
    $("#registrationForm").submit(function(event) {
        // Basic validation
        if ($("#password").val() !== $("#confirmPassword").val()) {
            alert("Passwords do not match.");
            event.preventDefault();
        }
        // You can add more complex validation here, like email format, password strength, etc.
    });
});