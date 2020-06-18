const regForm = document.querySelector('form#register');
const errors_el = document.querySelector('form#register .errors');

regForm.addEventListener('submit', validateRegisterForm);

//Prevents form submission before validation
function validateRegisterForm(e) {
    e.preventDefault();

    const firstname = document.querySelector('#register #firstname');
    const surname = document.querySelector('#register #surname');
    const email = document.querySelector('#register #email');
    const password = document.querySelector('#register #password');

    let errors = [];

    if(firstname.value == '') {
        errors.push({text: "first name", el: firstname});
    }

    if(surname.value == '') {
        errors.push({text: "sur name", el: surname});
    }
    if(email.value == '') {
        errors.push({text: "email", el: email});
    }
    if(password.value == '') {
        errors.push({text: "password", el: password});
    }

    //Gives error if only some fields of form are filled
    if(errors.length > 0) {
        handle_errors(errors);
        return false;
    }

    alert('SUBMITTED');
    return true;
}

function handle_errors(errs) {
    let str = "You have error with the following fields: ";
    errs.map((er) => {
        er.el.classList.add('error');
        str +=er.text + ", ";
    });

    //Focuses only on those fields which are causing error
    errs[0].el.focus();
}