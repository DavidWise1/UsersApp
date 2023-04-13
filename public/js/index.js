function addUser() {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    var ageInput = document.getElementById("age");
    var notification = document.getElementById("notification");

    var firstName = firstNameInput.value.trim();
    var lastName = lastNameInput.value.trim();
    var email = emailInput.value.trim();
    var age = ageInput.value.trim();

    var firstNamePattern = /^[a-zA-Z]+$/;
    var lastNamePattern = /^[a-zA-Z]+$/;
    var emailPattern = /^\S+@\S+\.\S+$/;
    var agePattern = /^[0-9]+$/;

    notification.innerText = "";


    //validatoins
    if (firstName === "" || lastName === "" || email === "" || age === "") {
        notification.innerText = "All fields are required.";
        return;
    }

    if (!firstName.match(firstNamePattern)) {
        notification.innerText = "First name must contain letters only.";
        firstNameInput.focus();
        return;
    }

    if (!lastName.match(lastNamePattern)) {
        notification.innerText = "Last name must contain letters only.";
        lastNameInput.focus();
        return;
    }

    if (!email.match(emailPattern)) {
        notification.innerText = "Please enter a valid email address.";
        emailInput.focus();
        return;
    }

    if (!age.match(agePattern)) {
        notification.innerText = "Age must contain numbers only.";
        ageInput.focus();
        return;
    }

    var user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age
    };

    fetch("/users/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(user)
    })
        .then(async response => {
            const result = await response.json();
            console.log(result);
            notification.innerText = "User added succesfully";
        })
        .catch(error => {
            console.error(error);
        });

}


function clearInputs() {
    var firstNameInput = document.getElementById("firstName");
    var lastNameInput = document.getElementById("lastName");
    var emailInput = document.getElementById("email");
    var ageInput = document.getElementById("age");
    var notification = document.getElementById("notification");

    firstNameInput.value = "";
    lastNameInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
    notification.innerText = "";
}

function displayUsers() {
    window.location.href = "/viewusers.html";
}