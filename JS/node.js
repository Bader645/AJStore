function hideLoadingScreen () {
    const loadingScreen = document.getElementById("loading-screen")
    if (loadingScreen) loadingScreen.style.display = "none"
}
if(document.readyState === "complete") {
    hideLoadingScreen();
} else {
    window.addEventListener('load', hideLoadingScreen)
}
