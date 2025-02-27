// Sign Up Page Start


// Sign Up Page End

function register() {  
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    console.log("Fisrt Name is: "+fname +"\n"+"Last Name is: "+lname+"\n"+"Email is:"+email+"\n"+"Phone Number is: "+phone+"\n"+"The Password is: "+password);

}


// Hide Password Start

document.getElementById("showPassword").addEventListener('change', function() {
    const passwordField = document.getElementById("password");
    if(this.checked) {
        passwordField.type="text";
    } else 
    {
        passwordField.type="password";
    }
})

// Hide Password End

// Validation  sign in form Start
const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();

    if(fnameValue === '') {
        setError(fname, 'First Name is required');
    } else {
        setSuccess(fname);
    }

    if(lnameValue === '') {
        setError(lname, 'Last Name is required');
    } else {
        setSuccess(lname);
    }
    
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, 'Phone Number is required');
    } else {
        setSuccess(phone);
    }

    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
};

// Validation sign in form  End

