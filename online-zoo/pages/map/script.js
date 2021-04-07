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
