// console.log('Form Validation');

onSubmit = () => {
    // Variables declarations and getting all of the form inputs
    const inputs = document.getElementById("my-form").elements; 
    let valid = true;

    // Looping through inputs and checking validity
    for (let input of inputs) {
        valid = valid && input.checkValidity();
    }

    // Ternary statment
    valid ? alert("Booking Success!") : alert("Please try again...");

    return false;
}

checkInput = () => {
    // Constants declarations
    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const numberInput = document.getElementById("number");
    const dateInput = document.getElementById("date");
    const checkboxInput = document.getElementById("checkbox");

    // Error div constants
    const fullNameError = document.getElementById("full-name-error");
    const emailError = document.getElementById("email-error");
    const numberError = document.getElementById("number-error");
    const dateError = document.getElementById("date-error");
    const checkboxError = document.getElementById("checkbox-error");

    // List of inputs and errors
    var inputs = [fullNameInput, emailInput, numberInput, dateInput, checkboxInput];
    var errors = [fullNameError, emailError, numberError, dateError, checkboxError];

    // Foreach loop handling list of inputs and errors to error message
    inputs.forEach((input, index) => {
        const error = errors[index];

        if (!input.checkValidity()) {
            error.style.display = "block";
            error.innerHTML = input.validationMessage;
        } else {
            error.style.display = "none";
            error.innerHTML = "";
        }
    })
}

// Handling help-link video
reveal = () => {
    let video = document.getElementById('video');
    
    video.style.display = 'block';
    video.play();
}

unreveal = () => {
    let video = document.getElementById('video');

    video.style.display = 'none';
    video.pause();
}