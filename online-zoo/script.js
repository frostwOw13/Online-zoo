// Header burger
const burger = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".header__nav");
const bodyLock = document.querySelector("body");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  bodyLock.classList.toggle("lock");
});

// Navigation switch theme
const switcher = document.getElementById("switch");

// What's elements to change:
const headerColor = document.querySelector(".header");
const headerNavColor = document.querySelectorAll(".header__link");
const headerLogo = document.querySelector(".header__logo");

const middleContainerColor = document.querySelector(".middle-container");
const sliderFour = document.querySelector(".slider-dark_four");

const featuresColor = document.querySelector(".features");

const petsColor = document.querySelector(".pets");
const sliderEight = document.querySelectorAll(".slider-dark");

const payNfeedColor = document.querySelector(".payNfeed");
const payNfeedPar = document.querySelectorAll(
  ".payNfeed__container-item-article"
);

const testimonialsColor = document.querySelector(".testimonials");
const testimonialsSquaresColor = document.querySelectorAll(
  ".testimonials__slider__item"
);
const sliderLight = document.getElementById("sliderTest");

const mapColor = document.querySelector(".map");
const mapImg = document.querySelector(".map__global-map");
const mapPopup = document.querySelectorAll(".map__global-index_popup");
const mapPopUptext = document.querySelectorAll(".mapPopUptext");

let darkTheme = false; // boolean var to track dark theme;

switcher.addEventListener("click", (e) => {
  if (darkTheme === false) {
    document.body.style.color = "#FEFEFE";
    document.querySelectorAll(".vector").forEach((e) => {
      e.src = "assets/icons/landing/vectorSlide-dark.png";
    });

    headerColor.style.backgroundColor = "#333333";
    headerLogo.src = "assets/images/logo-dark.png";
    headerNavColor.forEach((link) => {
      link.style.color = "#FEFEFE";
    });

    middleContainerColor.style.backgroundColor = "#333333";
    sliderFour.classList.remove("slider-dark_four");
    sliderFour.classList.add("slider-light_four");

    featuresColor.style.backgroundColor = "#4F4F4F";

    petsColor.style.backgroundColor = "#333333";
    sliderEight.forEach((slide) => {
      slide.classList.remove("slider-dark");
      slide.classList.add("slider-light");
    });
    document.querySelector(".pets__btn").style.marginTop = "30px";

    payNfeedColor.style.backgroundColor = "#4F4F4F";
    payNfeedPar.forEach((e) => {
      e.style.color = "#FEFEFE";
    });

    testimonialsColor.style.backgroundColor = "#333333";
    testimonialsSquaresColor.forEach((e) => {
      e.style.backgroundColor = "#3C3C3C";
    });
    sliderLight.style.marginBottom = "30px";

    mapColor.style.backgroundColor = "#4F4F4F";
    mapImg.src = "assets/images/Landing/Map/map-dark.png";
    mapPopup.forEach((e) => {
      e.style.backgroundColor = "#333333";
    });
    mapPopUptext.forEach((e) => {
      e.style.color = "#FEFEFE";
    });

    darkTheme = true;
  } else {
    document.body.style.color = "#333333";
    document.querySelectorAll(".vector").forEach((e) => {
      e.src = "assets/icons/landing/vectorSlide.svg";
    });

    headerColor.style.backgroundColor = "#FEFEFE";
    headerLogo.src = "assets/images/logo-light.png";
    headerNavColor.forEach((link) => {
      link.style.color = "#333333";
    });

    middleContainerColor.style.backgroundColor = "#FEFEFE";
    sliderFour.classList.remove("slider-light_four");
    sliderFour.classList.add("slider-dark_four");

    featuresColor.style.backgroundColor = "#f2f2f2";

    petsColor.style.backgroundColor = "#FEFEFE";
    sliderEight.forEach((slide) => {
      slide.classList.remove("slider-light");
      slide.classList.add("slider-dark");
    });
    document.querySelector(".pets__btn").style.marginTop = "0";

    payNfeedColor.style.backgroundColor = "#FEFEFE";
    payNfeedPar.forEach((e) => {
      e.style.color = "#4F4F4F";
    });

    testimonialsColor.style.backgroundColor = "#FEFEFE";
    testimonialsSquaresColor.forEach((e) => {
      e.style.backgroundColor = "#FEFEFE";
    });

    mapColor.style.backgroundColor = "#F2F2F2";
    mapImg.src = "assets/images/Landing/Map/map.png";
    mapPopup.forEach((e) => {
      e.style.backgroundColor = "#FEFEFE";
    });
    mapPopUptext.forEach((e) => {
      e.style.color = "#333333";
    });

    darkTheme = false;
  }
});
// Slider firstscreen
class SliderFirst {
  constructor({
    main,
    wrap,
    items,
    range,
    rangeHTML,
    dots1,
    dots2
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelectorAll(items);
    this.range = document.querySelector(range);
    this.rangeHTML = document.querySelector(rangeHTML);
    this.dots1 = document.querySelector(dots1);
    this.dots2 = document.querySelector(dots2)
    this.position = 1;
  }

  init() {
    this.controlSlider();
    this.cursorPointer();
  }

  controlSlider() {
    this.slides.forEach((slide, id) => {
      slide.addEventListener('click', () => {
        if (id === this.position + 1) {
          this.next();
        } else if (id === this.position - 1) {
          this.prev();
        }
      })
    })
    this.range.addEventListener('input', this.rangeSlider.bind(this));
  }

  cursorPointer() {
    this.slides.forEach(slide => {
      slide.style.cursor = 'default';
    })
    console.log(this.position);
    if (this.position < 1) {
      this.slides[this.position + 1].style.cursor = 'pointer';
    } else if (this.position > 6) {
      this.slides[this.position - 1].style.cursor = 'pointer';
    } else {
      this.slides[this.position + 1].style.cursor = 'pointer';
      this.slides[this.position - 1].style.cursor = 'pointer';
    }
  }

  rangeSlider() {
    this.position = this.range.value - 1;
    for (const item of this.slides) {
      item.classList.remove('active');
    }
    console.log(this.position);
    if (this.position === 0) {
      this.wrap.style.transform = `translateX(190px)`;
    } else {
      this.wrap.style.transform = `translateX(-${(this.position - 1) * 190}px)`;
    }
    

    this.slides[this.position].classList.add('active');
    this.changeRangeHTML();
  }

  changeRangeHTML() {
    this.rangeHTML.innerHTML = `0${this.range.value}/<span>08</span>`;
  }

  prev() {
    --this.position;
    if (this.position === 0) {
      this.slides[this.position].classList.add('active');
      this.slides[this.position + 1].classList.remove('active');

      this.wrap.style.transform = `translateX(190px)`;
      this.dots1.classList.remove('hidden');
      
    } else {
      this.slides[this.position].classList.add('active');
      this.slides[this.position + 1].classList.remove('active');
      this.dots2.classList.add('hidden')
  
      this.wrap.style.transform = `translateX(-${(this.position - 1) * 190}px)`;
    }

    this.range.value = this.position + 1;
    this.changeRangeHTML();
    this.cursorPointer();
  }

  next() {
    ++this.position;
    if (this.position === 7) {
      this.dots2.classList.remove('hidden'); 
    } else {
      this.dots1.classList.add('hidden'); 
    }
    this.slides[this.position].classList.add('active');
    this.slides[this.position - 1].classList.remove('active');
    
    this.wrap.style.transform = `translateX(-${(this.position - 1)* 190}px)`;
    this.range.value = this.position + 1;
    this.changeRangeHTML();
    this.cursorPointer();
  }
}

const sliderFirst = new SliderFirst({
  main: '.slider__wrapper',
  wrap: '.slider__container',
  items: '.slider__item',
  range: '#range1',
  rangeHTML: '.slider__count',
  dots1: '.slider__item-dots',
  dots2: '.slider__item-dots1'
})

sliderFirst.init();
// Slider PETS IN ZOO 
class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    range,
    rangeHTML,
    slidesToShow = 4
  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.range = document.querySelector(range);
    this.rangeHTML = document.querySelector(rangeHTML);
    this.slides = document.querySelector(wrap).children;
    this.slidesToShow = slidesToShow;
    this.options = {
      position: 0,
      widthSlide: Math.floor(100 / this.slidesToShow),
    }
  }

  init() {
    this.addSlide();
    this.addStyle();
    this.controlSlider();
  }

  addSlide() {
    this.main.classList.add('new-slider')
    this.wrap.classList.add('new-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('new-slider__item')
    }
  }

  addStyle() {
    const style = document.createElement('style');
    style.id = 'sliderCarousel-style';
    style.textContent = `
    .new-slider {
      width: 1201px !important;
      overflow: hidden !important;
      margin: 0 auto;
    }

    .new-slider__wrap {
      display: flex !important;
      transition: transform .5s !important;
      will-change: transform !important;
    }

    .new-slider__item {
      padding-right: 30px;
      flex: 0 0 ${this.options.widthSlide}% !important;
      width: 278px !important;
      height: 399px !important;
    }
    `
    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));

    this.range.addEventListener('input', this.rangeSlider.bind(this));
  }

  changeRangeHTML() {
    this.rangeHTML.innerHTML = `0${this.range.value}/<span>08</span>`;
  }

  rangeSlider() {
    this.options.position = this.range.value - 1;
    for (const item of this.slides) {
      item.classList.remove('active');
    }
    if (this.options.position <= 3) {
      this.wrap.style.transform = `translateX(-${(this.options.position) * this.options.widthSlide}%)`;
    }
    if (this.options.position >= 4 && this.options.position <= 7) {
      this.wrap.style.transform = `translateX(-${(this.options.position - 3)* this.options.widthSlide}%)`;
    }
    this.slides[this.options.position].classList.add('active');
    this.changeRangeHTML();
  }

  prevSlider() {
    --this.options.position;
    if (this.options.position < 0) {
      this.options.position = 7;

      this.slides[0].classList.remove('active');
      this.slides[this.options.position].classList.add('active');
  
      this.wrap.style.transform = `translateX(-${(this.options.position - 3) * this.options.widthSlide}%)`;
      this.range.value = this.options.position + 1;
      this.changeRangeHTML();
    } else if (this.options.position >= 0 && this.options.position < 7) {
      this.slides[this.options.position + 1]?.classList.remove('active');
      this.slides[this.options.position].classList.add('active');

      this.wrap.style.transform = `translateX(-${(this.options.position - 3) * this.options.widthSlide}%)`;
      this.range.value = this.options.position + 1;
      this.changeRangeHTML();
    }
  }

  nextSlider() {
    ++this.options.position;
    if (this.options.position < 5) {
      this.slides[this.options.position - 1]?.classList.remove('active');
      this.slides[this.options.position].classList.add('active');
  
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      this.range.value = this.options.position + 1;
      this.changeRangeHTML();
    } else if (this.options.position >= 5 && this.options.position < 8) {
      this.slides[this.options.position - 1]?.classList.remove('active');
      this.slides[this.options.position].classList.add('active');

      this.range.value = this.options.position + 1;
      this.changeRangeHTML();
    } else if (this.options.position > 7) {
      this.options.position = 0;

      this.slides[7].classList.remove('active');
      this.slides[this.options.position].classList.add('active');

      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      this.range.value = this.options.position + 1;
      this.changeRangeHTML();
    }
  }
}

const carousel = new SliderCarousel({
  main: '.pets-slider',
  wrap: '.pets-slider__wrap',
  next: '.pets__slider-vector.rightVector',
  prev: '.pets__slider-vector.leftVector',
  range: '#range3',
  rangeHTML: '.pets__slider__count',
  slidesToShow: 4,
});

carousel.init();

// Map index active or not
const indexElementMap = document.querySelectorAll(".index-pet");

indexElementMap.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    el.classList.add("active");
  });
  el.addEventListener("mouseout", (e) => {
    el.classList.remove("active");
  });
});
