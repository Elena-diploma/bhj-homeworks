let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab__content");
tabs.forEach(function (element) {
    element.addEventListener("click", function (event) {
        tabs.forEach((el) => {el.classList.remove("tab_active")});
        tabContents.forEach((el) => {el.classList.remove("tab__content_active")});
        event.target.classList.add("tab_active");
        const targetIndex = Array.from(tabs).indexOf(event.target);
        let targetContent = Array.from(tabContents)[targetIndex];
        targetContent.classList.add("tab__content_active");
    });
});
