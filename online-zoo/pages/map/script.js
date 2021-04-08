//Navigation switch theme
const switcher = document.querySelector(".switcher");
let darkTheme = false; // boolean var to track dark theme;

switcher.addEventListener("click", e => {
    if (darkTheme === false) {
        switcher.src = "../../assets/images/switcher__theme_dark.png";
        darkTheme = true;
    } else {
        switcher.src = "../../assets/images/switcher__theme.png";
        darkTheme = false;
    }
})

// Map index active or not
const indexElementMap = document.querySelectorAll('.index-pet');

indexElementMap.forEach(el => {
    
    el.addEventListener("mouseover", e => {
        el.classList.add("active");

    });
    el.addEventListener("mouseout", e => {
        el.classList.remove("active");
        
    });
});
