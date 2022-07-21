document.getElementById("submit-button").addEventListener('click', function () {
    const UserEmailField = document.getElementById("login-email-id");
    const UserPassword = document.getElementById("log-in-password");

    if (UserEmailField.value == "sourav@s.d" && UserPassword.value == "Hati") {

        location.href = "banking.html";
    }
    else {
        console.log("Invalid Case");
    }
})


