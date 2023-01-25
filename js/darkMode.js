// change theme
// const toggle = document.getElementById("toggle");
const dark = document.getElementsByClassName("dark-mode")[0];
const toggle = document.getElementById("toggle");
const changeLogo = document.getElementById("logo");
let isDark = true;

let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark") {
    document.body.classList.add("dark-theme-varibles");
    toggle.classList.add('active');
    if(!getMode === "dark") {
        changeLogo.src = "images/logo.png";
    } else {
        changeLogo.src = "images/logo dark.png";
    }
}
dark.onclick = function() {
    getMode = localStorage.getItem("mode");
    console.log(getMode);
    isDark = !isDark
    document.body.classList.toggle('dark-theme-varibles');
    toggle.classList.toggle('active');

    if(getMode === "dark") {
        changeLogo.src = "images/logo.png";
    } else {
        changeLogo.src = "images/logo dark.png";
    }

    if(!document.body.classList.contains("dark-theme-varibles")){
        return localStorage.setItem("mode", "light");
    }
    localStorage.setItem("mode", "dark");
}