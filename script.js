const form = document.getElementById('form');
const usernmae = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');



function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;

}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';


}

function validatePassword(pw) {

    return /[A-Z]/.test(pw) &&
        /[a-z]/.test(pw) &&
        /[0-9]/.test(pw) &&
        /[^A-Za-z0-9]/.test(pw) &&
        pw.length > 4;

}



function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e) {

    e.preventDefault();


    //Username Validation
    if (usernmae.value === '') {
        showError(usernmae, 'Username is required')


    } else {
        showSuccess(usernmae)
    }

    //Email Validation
    if (email.value === '') {
        showError(email, 'Email is required')

    } else if (!validateEmail(email.value)) {
        showError(email, "Email isn't valid");


    } else {
        showSuccess(email)
    }


    //password Validation
    if (password.value === '') {
        showError(password, 'password is required')

    } else if (!validatePassword(password.value)) {
        showError(password, "Password doesn't meet requirement");

    } else {
        showSuccess(password)
    }


    //password Validation
    if (password2.value === '') {
        showError(password2, 'password is required')
    } else {
        showSuccess(password2)
    }


});