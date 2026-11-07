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
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(?![\\\(\)\{\}])\W).{8,}$/

    if (!passwordCheck.test(passwordValue)) {
        console.log("Password does not meet the requirements.")
        return false
    }
    return true
}