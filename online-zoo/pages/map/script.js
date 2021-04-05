// Navigation bar first element is active or not
const navElem = document.getElementById("linkHeader3");
navElem.addEventListener("mouseover", e => {
    navElem.classList.toggle("active");
});

//Navigation switch theme
const switcher = document.querySelector(".switcher");
let darkTheme = false; // boolean var to track dark theme;

switcher.addEventListener("click", e => {
    if (darkTheme === false) {
        switcher.src = "../../../assets/images/switcher__theme_dark.png";
        darkTheme = true;
    } else {
        switcher.src = "../../../assets/images/switcher__theme.png";
        darkTheme = false;
    }
})
