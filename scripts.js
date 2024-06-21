$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        var email = $('#email').val();
        var password = $('#password').val();
        var isValid = true;

        // Validate email
        if (!validateEmail(email)) {
            $('#email').addClass('is-invalid');
            isValid = false;
        } else {
            $('#email').removeClass('is-invalid');
        }

        // Validate password
        if (password.length < 8) {
            $('#password').addClass('is-invalid');
            isValid = false;
        } else {
            $('#password').removeClass('is-invalid');
        }

        // If form is valid, check credentials
        if (isValid) {
            if (email === 'admin@gmail.com' && password === '12345678') {
                showAlert('Login successful!', 'success');
            } else {
                showAlert('Invalid username or password.', 'danger');
            }
        }
    });

    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function showAlert(message, type) {
        var alertHtml = `
            <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                ${message}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        `;
        $('#alert-placeholder').html(alertHtml);
    }
});
