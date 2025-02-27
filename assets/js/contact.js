// ==============================================Validation Start==============================================
const contact = document.getElementById('contact');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const contactUs = document.getElementById('contactUs');

contact.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
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
    return re.test(String(email).toLocaleLowerCase());
}

const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const contactUsValue = contactUs.value.trim();
    if (firstNameValue === '') {
        setError(firstName, "First Name is required");
    } else {
        setSuccess(firstName);
    }

    if (lastNameValue === '') {
        setError(lastName, "Last Name is required");
    } else {
        setSuccess(lastName);
    }

    if (emailValue=== '') {
        setError(email, "Email is required");
    } else {
        setSuccess(email);
    }

    if (phoneValue=== '') {
        setError(phone, "Phone is required");
    } else {
        setSuccess(phone);
    }

    if(contactUsValue === '') {
        setError(contactUs, 'Please enter Message');
    } else if (contactUsValue.length < 20 ) {
        setError(contactUs, 'Message should be 20 characters long.')
    } else {
        setSuccess(contactUs);
    }
};
// ==============================================Validation End ==============================================


// ============================================== Contact Message Start ==============================================
function message () {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const contactUs = document.getElementById("contactUs").value;
    console.log("First Name is: "+firstName +"\n"+"Last Name is: "+lastName+"\n"+"Email is:"+email+"\n"+"Phone Number is: "+phone+"\n"+"The Contact message is: "+contactUs);
}
// ============================================== Contact Message End ==============================================