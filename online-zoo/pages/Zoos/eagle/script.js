// Navigation bar first element is active or not
const navElem = document.getElementById("linkHeader2");
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

// Aside script
const activePet = document.querySelectorAll(".pets-slider__image");
const arrowUp = document.querySelector(".arrow-up");
const arrowDown = document.querySelector(".arrow-down");

activePet.forEach((pet, id) => {
    if (pet.classList.contains("active")) {   // Check which pet have active class
        if (id === 0) {
            arrowUp.style.marginBottom = "0";    // Set margin to 0, for good block display
        } else if (id === 3) {
            arrowDown.style.marginTop = "0";  // Set margin to 0, for good block display
        }
    }
})

// Pets player script
const switchButton = document.querySelectorAll(".pets-player__watch-switch__item");

switchButton.forEach(btn => {
    btn.addEventListener("click", e => {
        switchButton.forEach(btn1 => {
            btn1.classList.remove("active"); // Set all btn to non-active
        });
        btn.classList.toggle("active"); // Active clicked btn
    });
});
