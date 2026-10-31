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