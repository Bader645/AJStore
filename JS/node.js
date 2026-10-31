if(document.readyState !== "complete") {
    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById("loading-screen")
        if (loadingScreen) loadingScreen.style.display = "none"
    })
}
