const divs = document.getElementsByTagName('div');
const modalFirst = document.getElementById("modal_main");
const modalSecond = document.getElementById("modal_success");

const modalOpen = (element) => {
    element.classList.add("modal_active")
}

const modalClose = function modalClose(element) {
    const close = element.closest(".modal");
    close.classList.remove("modal_active");

};

for (let item of modalFirst.getElementsByClassName("modal__close")) {
    item.onclick = function () {
        modalClose(item);
    }
}

for (let element of divs) {
    if(element.classList.length === 0){
        console.log(element);
        element.onclick = function () {
            modalOpen(document.getElementById("modal_main"))
        }
    }
}

for (let item of modalFirst.getElementsByClassName("btn_danger")) {
    item.onclick = () => {
        modalClose(modalFirst);
        modalOpen(modalSecond);
    }
}
for (let item of modalSecond.getElementsByClassName("btn_success")) {
    item.onclick = () => {
        modalClose(modalSecond);
    }
}
