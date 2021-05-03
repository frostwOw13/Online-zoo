// Navigation switch theme
const switcher = document.getElementById("switch");
// What's elements to change:
const headerColor = document.querySelector(".header__wrapper");
const headerNavColor = document.querySelectorAll(".header__link");
const headerLogo = document.querySelector(".header__logo");
const h2Color = document.querySelector('.pets-player__title');
const h3Color = document.querySelectorAll('.h3');

let darkTheme = false; // boolean var to track dark theme;

switcher.addEventListener("click", (e) => {
  if (darkTheme === false) {
    document.body.style.color = "#FEFEFE";
    document.body.style.backgroundColor = "#4F4F4F";
    h2Color.style.color = "#FEFEFE";
    h3Color.forEach(h => {
      h.style.color = "#FEFEFE"
    })

    headerColor.style.backgroundColor = "rgb(51, 51, 51)";
    headerLogo.src = "../../../assets/images/logo-dark.png";
    headerNavColor.forEach((link) => {
      link.style.color = "#FEFEFE";
    });

    darkTheme = true;
  } else {
    document.body.style.color = "#333333";
    document.body.style.backgroundColor = "#FEFEFE";
    h2Color.style.color = "#333333";
    h3Color.forEach(h => {
      h.style.color = "#333333"
    })

    headerColor.style.backgroundColor = "#FEFEFE";
    headerLogo.src = "../../../assets/images/logo-light.png";
    headerNavColor.forEach((link) => {
      link.style.color = "#333333";
    });
    
    darkTheme = false;
  }
});

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

// Pets player dots below carousel
const switchButton = document.querySelectorAll(".pets-player__watch-switch__item");

switchButton.forEach(btn => {
    btn.addEventListener("click", e => {
        switchButton.forEach(btn1 => {
            btn1.classList.remove("active"); // Set all btn to non-active
        });
        btn.classList.toggle("active"); // Active clicked btn
    });
});
// Pets carousel
class Carousel {
  constructor({
    main,
    slider
  }) {
    this.main = document.querySelector(main).children;
    this.slider = document.querySelector(slider);
    this.slides = document.querySelector(slider).children;
    
  }

  init() {
    this.controlSlider()
  }

  controlSlider() {
    let itemsSlider = [];

    for (const item of this.slides) {
      itemsSlider.push(item);
    }
    
    itemsSlider.forEach((item, id) => {
      item.addEventListener('click', () => {
        console.log(itemsSlider);
        let prevMain = this.main[0];

        prevMain.before(item);
        this.main[1].remove()
        
        itemsSlider.splice(id, 1);
        itemsSlider.splice(id, 0, prevMain);
        for (let i = 0; i < this.slides.length; i++) {
          this.slides[i].remove()
          --i;
        }
        for (const itemInsert of itemsSlider) {
          this.slider.append(itemInsert)
        }
        itemsSlider = [];

        for (const item of this.slides) {
        itemsSlider.push(item);
        }
      })
    })
  }
}

const carousel = new Carousel({
  main: '.pets-player__main-video',
  slider: '.pets-player__watch-slider'
})

carousel.init();


