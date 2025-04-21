const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider-arrow.prev');
const nextButton = document.querySelector('.slider-arrow.next');
const dotsContainer = document.querySelector('.slider-dots');

const slideCount = slides.length;
let currentSlide = 0;
let intervalId;

function goToSlide(slideIndex) {
    currentSlide = (slideIndex % slideCount + slideCount) % slideCount;
    slider.style.transform = `translateX(-${currentSlide * (100 / slideCount)}%)`; // Учитываем количество слайдов
    updateDots();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startSlider() {
    intervalId = setInterval(nextSlide, 3000); // Автоматическое перелистывание каждые 3 секунды
}

function stopSlider() {
    clearInterval(intervalId);
}

function createDots() {
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.slide = i;
        dot.addEventListener('click', function() {
            stopSlider(); // Останавливаем автоматическое переключение
            goToSlide(parseInt(this.dataset.slide)); // Переходим к нужному слайду
            startSlider(); // Запускаем автоматическое переключение снова
        });
        dotsContainer.appendChild(dot);
    }
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Обработчики событий
prevButton.addEventListener('click', function() {
    stopSlider();
    prevSlide();
    startSlider();
});

nextButton.addEventListener('click', function() {
    stopSlider();
    nextSlide();
    startSlider();
});

slider.addEventListener('mouseenter', stopSlider); // Останавливаем при наведении
slider.addEventListener('mouseleave', startSlider); // Запускаем при уходе мыши

// Инициализация
createDots();
goToSlide(0); // Показываем первый слайд
startSlider(); // Запускаем автоматическое переключение











const sliderContainerObjects = document.querySelector('.slider-container-objects');
const sliderObjects = document.querySelector('.slider-objects');
const slidesObjects = document.querySelectorAll('.slide-objects');
const prevButtonObjects = document.querySelector('.slider-arrow-objects.prev-objects');
const nextButtonObjects = document.querySelector('.slider-arrow-objects.next-objects');

const slideCountObjects = slidesObjects.length;
let currentSlideObjects = 0;
let intervalIdObjects;

function goToSlideObjects(slideIndex) {
    currentSlideObjects = (slideIndex % 6 + 6) % 6; //  Теперь мотает по 5 слайдам
    sliderObjects.style.transform = `translateX(-${currentSlideObjects * 7}%)`; //  100% потому что 2 слайда видно
}

function nextSlideObjects() {
    goToSlideObjects(currentSlideObjects + 1);
}

function prevSlideObjects() {
    goToSlideObjects(currentSlideObjects - 1);
}

function startSliderObjects() {
    intervalIdObjects = setInterval(nextSlideObjects, 4000); // 3.5 секунды
}

function stopSliderObjects() {
    clearInterval(intervalIdObjects);
}

// Обработчики событий
prevButtonObjects.addEventListener('click', function() {
    stopSliderObjects();
    prevSlideObjects();
    startSliderObjects();
});

nextButtonObjects.addEventListener('click', function() {
    stopSliderObjects();
    nextSlideObjects();
    startSliderObjects();
});

sliderContainerObjects.addEventListener('mouseenter', stopSliderObjects);
sliderContainerObjects.addEventListener('mouseleave', startSliderObjects);

// Инициализация
goToSlideObjects(0);
startSliderObjects();












const sliderContainerThird = document.querySelector('.slider-container-third');
const sliderThird = document.querySelector('.slider-third');
const slidesThird = document.querySelectorAll('.slide-third');
const prevButtonThird = document.querySelector('.slider-arrow-third.prev-third');
const nextButtonThird = document.querySelector('.slider-arrow-third.next-third');

const slideCountThird = slidesThird.length;
let currentSlideThird = 0;
let intervalIdThird;

function goToSlideThird(slideIndex) {
    currentSlideThird = (slideIndex % 3 + 3) % 3;
    sliderThird.style.transform = `translateX(-${currentSlideThird * 4}%)`;
}

function nextSlideThird() {
    goToSlideThird(currentSlideThird + 1);
}

function prevSlideThird() {
    goToSlideThird(currentSlideThird - 1);
}

function startSliderThird() {
    intervalIdThird = setInterval(nextSlideThird, 5000); // 3.5 секунды
}

function stopSliderThird() {
    clearInterval(intervalIdThird);
}

// Обработчики событий
prevButtonThird.addEventListener('click', function() {
    stopSliderThird();
    prevSlideThird();
    startSliderThird();
});

nextButtonThird.addEventListener('click', function() {
    stopSliderThird();
    nextSlideThird();
    startSliderThird();
});

sliderContainerThird.addEventListener('mouseenter', stopSliderThird);
sliderContainerThird.addEventListener('mouseleave', startSliderThird);

// Инициализация
goToSlideThird(0);
startSliderThird();


















const sliderContainerFourth = document.querySelector('.slider-container-fourth');
const sliderFourth = document.querySelector('.slider-fourth');
const slidesFourth = document.querySelectorAll('.slide-fourth');
const prevButtonFourth = document.querySelector('.slider-arrow-fourth.prev-fourth');
const nextButtonFourth = document.querySelector('.slider-arrow-fourth.next-fourth');

const slideCountFourth = slidesFourth.length;
let currentSlideFourth = 0;
let intervalIdFourth;

function goToSlideFourth(slideIndex) {
    currentSlideFourth = (slideIndex % 5 + 5) % 5;
    sliderFourth.style.transform = `translateX(-${currentSlideFourth * (8)}%)`;
}

function nextSlideFourth() {
    goToSlideFourth(currentSlideFourth + 1);
}

function prevSlideFourth() {
    goToSlideFourth(currentSlideFourth - 1);
}

function startSliderFourth() {
    intervalIdFourth = setInterval(nextSlideFourth, 5000);
}

function stopSliderFourth() {
    clearInterval(intervalIdFourth);
}

// Обработчики событий
prevButtonFourth.addEventListener('click', function() {
    stopSliderFourth();
    prevSlideFourth();
    startSliderFourth();
});

nextButtonFourth.addEventListener('click', function() {
    stopSliderFourth();
    nextSlideFourth();
    startSliderFourth();
});

sliderContainerFourth.addEventListener('mouseenter', stopSliderFourth);
sliderContainerFourth.addEventListener('mouseleave', startSliderFourth);

// Инициализация
goToSlideFourth(0);
startSliderFourth();