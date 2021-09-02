let currentSlideIndex = 0;
let arrows = document.querySelectorAll("div.slider__arrow");
console.log(arrows);
arrows.forEach((item) => item.onclick = () => {
    if(item.classList.contains("slider__arrow_prev")) {
        changeSlide("left");
    }
    if(item.classList.contains("slider__arrow_next")) {
        changeSlide("right");
    }
});

function changeSlide(direction) {
    let slideElements = document.querySelectorAll("div.slider__item");
    slideElements.forEach((el) => el.classList.remove("slider__item_active"));
    let slides = Array.from(slideElements);
    switch (direction) {
        case "left":
            currentSlideIndex = currentSlideIndex - 1;
            if(currentSlideIndex < 0) currentSlideIndex = slides.length - 1;
            break;
        case "right":
            currentSlideIndex = currentSlideIndex + 1;
            if(currentSlideIndex > slides.length - 1) currentSlideIndex = 0;
            break;
    }
    slides[currentSlideIndex].classList.add("slider__item_active");
}

