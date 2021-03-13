// Header burger
const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.header__nav');
const bodyLock = document.querySelector('body');

burger.addEventListener('click', e => {
    burger.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    bodyLock.classList.toggle('lock');
});



const sliderRange = document.getElementById('range1');
const currentSlide = document.querySelector('.slider__bottomside-count-current');
const sliderImage = document.querySelectorAll('.slider__item-image');
const sliderContainer = document.querySelector('.slider__container');

const addActiveSlide = function(num) {
    sliderImage[num].classList.add('active');
}

const hideSlide = function (num) {
    sliderImage[num].classList.add('hidden');
}

const showSlide = function (num) {
    sliderImage[num].classList.remove('hidden')
}

const removeActiveSlide = function(num) {
    sliderImage[num].classList.remove('active');
}

const moveRightSlide = function(right) {
    sliderContainer.style.right = 'right';
}

const moveLeftSlide = function(left) {
    sliderContainer.style.right = 'left';
}
let prev = 2;
const slideImage = function (num) {
            switch (num) {
                case 1: 
                    addActiveSlide(num-1);
                    sliderContainer.style.left = '185px';
                    removeActiveSlide(num);
                    prev = 0;
                    hideSlide(num + 3);
                    break;
                 case 2:
                    if (prev === 0) {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-3px';
                        removeActiveSlide(num-2);
                        prev = 2;
                        showSlide(num + 2)
                    } else {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '3px';
                        removeActiveSlide(num);
                        prev = 2;
                        showSlide(num - 2);
                        hideSlide(num + 3);
                    }
                    break;
                case 3: 
                    if (prev === 2) {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-50px';
                        removeActiveSlide(num-2);
                        prev = 3;
                        hideSlide(num - 3);
                        showSlide(num + 2)
                    } else {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-50px';
                        removeActiveSlide(num);
                        prev = 3;
                        showSlide(num - 2);
                        hideSlide(num + 3);
                    }
                    break;
                case 4:
                    if (prev === 3) {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-97px';
                        removeActiveSlide(num-2);
                        prev = 4;
                        hideSlide(num - 3);
                        showSlide(num + 2)
                    } else {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-97px';
                        removeActiveSlide(num);
                        prev = 4;
                        showSlide(num - 2);
                        hideSlide(num + 3);
                    }
                    break;
                case 5: 
                    if (prev === 4) {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-148px';
                        removeActiveSlide(num-2);
                        prev = 5;
                        hideSlide(num - 3);
                        showSlide(num + 2)
                     } else {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-148px';
                        removeActiveSlide(num);
                        prev = 5;
                        showSlide(num - 2);
                     }
                     break;
                case 6: 
                    if (prev === 5) {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-197px';
                        removeActiveSlide(num-2);
                        prev = 6;
                        hideSlide(num - 3);
                     } else {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-197px';
                        removeActiveSlide(num);
                        prev = 6;
                        showSlide(num - 2);
                     }
                     break;
                case 7: 
                    if (prev === 6) {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-247px';
                        removeActiveSlide(num-2);
                        prev = 7;
                        hideSlide(num - 3);
                     } else {
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-247px';
                        removeActiveSlide(num);
                        prev = 7;
                        showSlide(num - 2);
                     }
                     break;
                case 8: 
                        addActiveSlide(num-1);
                        sliderContainer.style.left = '-297px';
                        removeActiveSlide(num-2);
                        prev = 8;
                        hideSlide(num - 3);
                     break;
            }
        // }
}


sliderRange.oninput = function() {
    if (this.value <= 1) {
        let num = 1;
        currentSlide.innerHTML = '01/<span>08</span>';
        slideImage(num);
    } else if (this.value > 1 && this.value <= 2){
        let num = 2;
        currentSlide.innerHTML = '02/<span>08</span>';
        slideImage(num);
    } else if (this.value > 2 && this.value <= 3){
        let num = 3;
        currentSlide.innerHTML = '03/<span>08</span>';
        slideImage(num);
    } else if (this.value > 3 && this.value <= 4){
        let num = 4;
        currentSlide.innerHTML = '04/<span>08</span>';
        slideImage(num);
    } else if (this.value > 4 && this.value <= 5){
        let num = 5;
        currentSlide.innerHTML = '05/<span>08</span>';
        slideImage(num);
    } else if (this.value > 5 && this.value <= 6){
        let num = 6;
        currentSlide.innerHTML = '06/<span>08</span>';
        slideImage(num);
    } else if (this.value > 6 && this.value <= 7){
        let num = 7;
        currentSlide.innerHTML = '07/<span>08</span>';
        slideImage(num);
    } else if (this.value > 7){
        let num = 8;
        currentSlide.innerHTML = '08/<span>08</span>';
        slideImage(num);
    } 
};