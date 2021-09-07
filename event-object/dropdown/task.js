let button = document.querySelectorAll("div.dropdown__value");
let dropDownLinks = document.querySelectorAll("ul.dropdown__list > li.dropdown__item > a.dropdown__link");

dropDownLinks.forEach(function(el) {
   el.addEventListener("click", function (event) {
       el.closest("ul.dropdown__list").classList.remove("dropdown__list_active");
       el.closest("div.dropdown").querySelector("div.dropdown__value:first-child").textContent = el.textContent;
       event.preventDefault();
   })
});

button.forEach(function (el) {
    el.addEventListener("click", function () {
        el.nextElementSibling.classList.toggle("dropdown__list_active");
    })
})
