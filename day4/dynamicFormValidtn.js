const form = document.querySelector('#login-form');
const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const password_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

let username = form.elements.namedItem('username');
let password = form.elements.namedItem('password');

username.addEventListener('input', validate);
password.addEventListener('input', validate);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('SUBMITTED');
});

function validate(e) {
    let target = e.target;

    if(target.name == "password") {
        if(password_reg.test(target.value)) {
            target.classList.add('valid');
            target.classList.remove('invalid');
        } else {
            target.classList.add('invalid');
            target.classList.remove('valid');
        }
    }

    if(target.name == username) {

    }
}