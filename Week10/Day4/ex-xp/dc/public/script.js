const loginForm = document.forms.loginForm;
const regForm = document.forms.regForm;
const loginButton = document.getElementById('login')
const regButton = document.getElementById('register')
const loginMessage = document.getElementById('login_message')
const regMessage = document.getElementById('reg_message')

// Function to check if all form fields are filled
function checkFields(form, button) {
    // Get all the input fields within the form
    const inputFields = form.querySelectorAll('input[type="text"]');

    // Loop through each input field and check if it has a value
    for (const inputField of inputFields) {
        if (!inputField.value.trim()) {
            // If any field is empty, disable the button and return
            button.disabled = true;
            return;
        }
    }

    // If all fields are filled, enable the button
    button.disabled = false;
}

// Add an event listener to the form that listens for changes in the input fields
regForm.addEventListener("input", () => checkFields(regForm, regButton));
loginForm.addEventListener("input", () => checkFields(loginForm, loginButton));


// Function print a message under registration form after submiting
function printRegMessage(userData){
    let message
    if ('error' in userData){
        message = userData.error
    } else {
        message = `Hi ${userData.firstname} ${userData.lastname}, your ID is: ${userData.id}`
        regForm.reset()
    }
    regMessage.textContent = message
}

// Event listner for the registration form
regForm.addEventListener('submit', async event => {
    event.preventDefault()
    
    // Collecting form data to an object
    let formData = new FormData(regForm)
    const registrationData = {};
    formData.forEach((value, key) => {
        registrationData[key] = value;
    });


    //fetching POST request for registration
    fetch('http://localhost:3000/registration',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(registrationData)
      })
      .then(res => res.json())
      .then(data => {
        printRegMessage(data[0]);
      })
      .catch(err => {
        console.log(err);
      })
})


// Function print a message under login form after submiting
function printLoginMessage(userData){
    let message
    if ('error' in userData){
        message = userData.error
    } else {
        message = `Hello, your username is: ${userData.username}`
    }
    loginMessage.textContent = message
}


// Event listner for the login form
loginForm.addEventListener('submit', async event => {
    event.preventDefault()
    
    // Collecting form data to an object
    let formData = new FormData(loginForm)
    const loginData = {};
    formData.forEach((value, key) => {
        loginData[key] = value;
    });



    //fetching POST request for login
    fetch('http://localhost:3000/login',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify(loginData)
      })
      .then(res => res.json())
      .then(data => {
        printLoginMessage(data[0]);
      })
      .catch(err => {
        console.log(err);
      })
})

