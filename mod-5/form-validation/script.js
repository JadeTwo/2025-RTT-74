let emailInput = document.querySelector('#email');
let emailSpan = document.querySelector('#customEmailError')
let simpleForm = document.querySelector('#simple-form');
let longForm = document.querySelector('#long-form');

longForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.dir(longForm); // <form id="long-form"></form>

    const formData = new FormData(longForm);

    const data = {
        username: longForm.elements.username.value,
        email: longForm[1].value,
        qty: formData.get('quantity'),
        url: longForm.elements.website.value,
        password: longForm.elements.password.value,
        age: longForm.elements.age.value,
        zip: longForm.elements.zipcode.value
    }

    console.log(data)
})

simpleForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevents page refresh and data being sent for us

    console.dir(simpleForm)
    console.log(simpleForm[0].value)
    console.dir(simpleForm.elements.name.value)

    const formData = new FormData(simpleForm);
    const nameValue = formData.get('bob');
    console.log(nameValue)

    console.log(formData);

    alert('Form Submitted!');
})

// input.setCustomValidity('Noooo!')
// input.reportValidity()

emailInput.addEventListener('blur', (e) => {
    const input = e.target
    // console.dir(input.validity)
    // console.log(input.validationMessage)
    if (input.validity.typeMismatch) {
        input.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
    } else if (input.validity.valueMissing) {
        input.setCustomValidity('We need your email address to contact you!');
    }
    else {
        input.setCustomValidity(''); // Clear custom error if valid
    }
    // Display the custom message or clear it
    emailSpan.textContent = input.validationMessage;
})


const input = document.querySelector('input');

input.addEventListener('input', (event) => {
  sessionStorage.setItem('firstName', event.target.value);
});

 
// On page load, try to populate the field
window.addEventListener('load', () => {
  const savedFirstName = sessionStorage.getItem('firstName');
  if (savedFirstName) {
    input.value = savedFirstName;
  }
});


for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}



let result;

result = (10 + 20) / 5;

if (result > 5) {
    result += ' : final result';
}
