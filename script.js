// SHOW / HIDE PASSWORD
let showPassword = () => {
    let inputPassword = document.getElementById("password");

    if(inputPassword.type === "password") {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
}



// VALIDATE FORM AND LOG IN
function validateForm() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let submitBtn = document.getElementById("submitBtn");

    if (username.value == "" || password.value == "") {
        alert("Unesite i korisnicko ime i lozinku");
        username.value = "";
        password.value = "";
    }

    if(username.value === "stojan" && password.value === "stojan123") {
        console.log(`Welcome, ${username}`);
        window.location.href = "home.html";
    } else {
        console.log("Wrong username or password");
    }
}

