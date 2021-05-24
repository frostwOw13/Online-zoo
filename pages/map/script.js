// Header burger
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');
const bodyLock = document.querySelector('body');

burger.addEventListener('click', e => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
});

// Navigation switch theme
const switcher = document.getElementById("switch");

// What's elements to change:
const headerColor = document.querySelector(".header");
const headerNavColor = document.querySelectorAll(".header__link");
const headerLogo = document.querySelector(".header__logo");
const titleMain = document.querySelector('.main__text-title');

const sliderColor = document.querySelector('.main__slider-bottom');

const mapColor = document.querySelector('.main__map-img');

let darkTheme = false; // boolean var to track dark theme;

switcher.addEventListener("click", (e) => {
  if (darkTheme === false) {
    document.body.style.color = "#FEFEFE";
    document.body.style.backgroundColor = "#4F4F4F";
    titleMain.style.color = "#FEFEFE";

    document.querySelectorAll(".arrow").forEach((e) => {
      e.src = "../../assets/icons/map/Vector-dark.svg";
    });

    headerColor.style.backgroundColor = "#333333";
    headerLogo.src = "../../assets/images/logo-dark.png";
    headerNavColor.forEach((link) => {
      link.style.color = "#FEFEFE";
    });

    sliderColor.classList.add('slider-light');
    sliderColor.classList.remove('.slider-dark');
    
    mapColor.src = '../../assets/images/Landing/Map/map-dark.png';

    darkTheme = true;
  } else {
    document.body.style.color = "#333333";
    document.body.style.backgroundColor = "#FEFEFE";
    titleMain.style.color = "#333333";

    document.querySelectorAll(".arrow").forEach((e) => {
      e.src = "../../assets/icons/map/Vector.svg";
    });

    headerColor.style.backgroundColor = "#FEFEFE";
    headerLogo.src = "../../assets/images/logo-light.png";
    headerNavColor.forEach((link) => {
      link.style.color = "#333333";
    });

    sliderColor.classList.remove('slider-light');
    sliderColor.classList.add('.slider-dark');

    mapColor.src = '../../assets/images/Landing/Map/map.png';
    
    darkTheme = false;
  }
});

// Slider on page
class Slider {
  constructor({
    main, 
    wrap,
    next, 
    prev,
    range,
    rangeHTML,
    mapIndexes,
    mapLink
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.range = document.querySelector(range);
    this.rangeHTML = document.querySelector(rangeHTML);
    this.slides = document.querySelector(wrap).children;
    this.mapIndexes = document.querySelectorAll(mapIndexes);
    this.mapLink = document.querySelector(mapLink);
    this.position = 1;
    
  }

  init() {
    this.controlSlider();
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));

    this.range.addEventListener('input', this.rangeSlider.bind(this));
    this.mapSlider();
    this.petsIconsListen();
  }

  petsIconsListen() {
    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].addEventListener('click', () => {
        for (const slide of this.slides) {
          slide.classList.remove('active');
        }
        this.mapIndexes.forEach((index) => {
          index.classList.remove('active');
        })
        this.slides[i].classList.add('active');
        this.mapIndexes[i]?.classList.add('active')

        this.position = i;
        this.range.value = i + 1;

        this.changeRangeHTML();
        this.addNewLink();
      })
    }
  }

  rangeSlider() {
    this.position = this.range.value - 1;
    for (const item of this.slides) {
      item.classList.remove('active');
    }
    this.slides[this.position].classList.add('active');
    this.changeRangeHTML();
    this.addActiveToMap();
    this.addNewLink();
  }

  mapSlider() {
    this.mapIndexes.forEach((index, id) => {
      index.addEventListener('click', () => {
        for (const slide of this.slides) {
          slide.classList.remove('active')
        }
        for (const i of this.mapIndexes) {
          i.classList.remove('active')
        }
        index.classList.add('active');
        this.slides[id].classList.add('active');
        this.position = id;

        this.range.value = this.position + 1;
        this.changeRangeHTML();
        this.addNewLink();
      })
    })
  }

  changeRangeHTML() {
    this.rangeHTML.innerHTML = `0${this.range.value}/<span>08</span>`;
  }

  addActiveToMap() {
    this.mapIndexes.forEach(index => {
      index.classList.remove('active');
    })

    this.mapIndexes[this.position]?.classList.add('active');
  }

  addNewLink() {
    const pets = {
      1: 'monkey',
      2: 'panda',
      3: 'alligator',
      4: 'eagle'
    }
    if (this.position <= 3 && this.position >= 0) {
      this.mapLink.href = `../Zoos/${pets[this.position + 1]}/index.html`
    } else {
      this.mapLink.href = '#!';
    }
  }

  prevSlider() {
    if (this.position > 0) {
      --this.position;
      this.slides[this.position + 1]?.classList.remove('active');
      this.slides[this.position].classList.add('active');

      this.range.value = this.position + 1;
      this.changeRangeHTML();
      this.addActiveToMap();
      this.addNewLink();
    } else {
      this.position = 7;
      this.slides[0].classList.remove('active');
      this.slides[this.position].classList.add('active');

      this.range.value = 8;
      this.changeRangeHTML();
      this.addActiveToMap();
      this.addNewLink();
    }
  }

  nextSlider() {
    if (this.position < 7) {
      ++this.position;
      this.slides[this.position - 1]?.classList.remove('active');
      this.slides[this.position].classList.add('active');

      this.range.value = this.position + 1;
      this.changeRangeHTML();
      this.addActiveToMap();
      this.addNewLink();
    } else {
      this.position = 0;
      this.slides[7].classList.remove('active');
      this.slides[this.position].classList.add('active');

      this.range.value = 1;
      this.changeRangeHTML();
      this.addActiveToMap();
      this.addNewLink();
    }
  }
}

const slider = new Slider({
  main: '.main__slider-top',
  wrap: '.main__slider-wrapper',
  next: '.arrow-right',
  prev: '.arrow-left',
  range: '#range1',
  rangeHTML: '.slider__bottomside-count-current',
  mapIndexes: '.map-index',
  mapLink: '.main__map__link'
})

slider.init();
