const menuClick = document.querySelectorAll("ul.menu_main > li.menu__item > a");
const menuMain = document.querySelectorAll("ul.menu_sub");

menuClick.forEach((el) => el.onclick = function() {
    const currentSubMenu = el.parentNode.querySelector("ul.menu_sub");
    if(currentSubMenu != null && currentSubMenu.classList.contains("menu_active")) {
        currentSubMenu.classList.remove("menu_active");
    } else {
        menuMain.forEach((item) => item.classList.remove("menu_active"));
        if(currentSubMenu != null ) currentSubMenu.classList.toggle("menu_active");
    }
    if(currentSubMenu != null) {
        return false;
    }
});