
function time () {
    const elementTimer = document.getElementById("timer");
    elementTimer.textContent -= 1;
    if (Number(elementTimer.textContent) === 0) {
        clearInterval(id);
        alert(`Вы победили в конкурсе!`);
    }
}
let id = setInterval(time, 1000);