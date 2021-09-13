let rotators = document.querySelectorAll("span.rotator");

function switchText(rotatorElement) {
    let items = Array.from(rotatorElement.querySelectorAll("span.rotator__case"));
    let activeElement = rotatorElement.querySelector("span.rotator__case_active");
    let activeIndex = 0;
    if(activeElement !== undefined) {
        activeIndex = items.indexOf(activeElement);
        activeIndex++;
    } else {
        items[0].classList.add("rotator__case_active");
        return;
    }
    if(activeIndex === items.length) {
        activeIndex = 0;
    }
    items.forEach((item) => item.classList.remove("rotator__case_active"));
    items[activeIndex].classList.add("rotator__case_active");
}

rotators.forEach(function (element) {
   setInterval(switchText, 1000, element);
});