


document.addEventListener('DOMContentLoaded', function () {
    const inputFirstName = document.querySelector('#firstName');
    const inputLastName = document.querySelector('#lastName');
    const inputCorreo = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');

    // Event listeners for inputs
    inputFirstName.addEventListener('blur', valid);
    inputLastName.addEventListener('blur', valid);
    inputCorreo.addEventListener('blur', valid);
    inputPassword.addEventListener('blur', valid);

    formulario.addEventListener('submit', function (e) {
        e.preventDefault();
        clearAlerts();

        if (checkForm()) {
            formulario.reset();
        }
    });

    function valid(e) {
        clearAlert(e.target);
    }

    function clearAlerts() {
        const alerts = formulario.querySelectorAll(".message-error");
        alerts.forEach(alert => alert.style.display = "none");
    }

    function checkForm() {
        let isFormValid = true;

        // Validacion de cada campo requerido
        if (inputFirstName.value.trim() === '') {
            showAlerts(inputFirstName.parentElement);
            isFormValid = false;
        }

        if (inputLastName.value.trim() === '') {
            showAlerts(inputLastName.parentElement);
            isFormValid = false;
        }

        if (inputCorreo.value.trim() === '' || !isEmailValid(inputCorreo.value)) {
            showAlerts(inputCorreo.parentElement);
            isFormValid = false;
        }

        if (inputPassword.value.trim() === '') {
            showAlerts(inputPassword.parentElement);
            isFormValid = false;
        }

        return isFormValid;
    }

    function showAlerts(referencia) {
        var span = referencia.querySelector(".message-error");
        span.style.display = "block";
    }

    function clearAlert(element) {
        var parentGroup = element.parentElement;
        var span = parentGroup.querySelector(".message-error");
        span.style.display = "none";
    }

    function isEmailValid(email) {
        const regex = /^\S+@\S+\.\S+$/;
        return regex.test(email);
    }
});






