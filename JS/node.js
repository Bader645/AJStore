const loadingScreen = document.getElementById("loading-screen")

function hideLoadingScreen () {
    if (loadingScreen)
        setTimeout(() => {
            loadingScreen.style.display="none"
        }, 1700);
}

if (document.readyState === 'complete') {
    hideLoadingScreen();
}
else (
    window.addEventListener('load', hideLoadingScreen)
)

document.getElementById("login-form").onsubmit = function() {
    let passwordValue = document.getElementById("password").value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*[\\(){}\s]).{8,}$/

    if (!passwordCheck.test(passwordValue)) {
        console.log("Password does not meet the requirements.")
        return false
    }
    return true
}

document.getElementsByClassName("eye-icon")[0].addEventListener("click", function() {
    let passwordField = document.getElementById("password")
    passwordField.type = passwordField.type === "password" ? "text" : "password"
    this.classList.toggle("fa-eye-slash");
    passwordField.focus()
})