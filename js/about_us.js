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
    intervalId = setInterval(nextSlide, 100000); // Автоматическое перелистывание каждые 3 секунды
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