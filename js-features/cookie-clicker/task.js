const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickerSpeed = document.getElementById('clicker__speed');
let lastClickTime = 0;
let allClickTime = 0;
let clicks = 0;

cookie.onclick = clicker;
function clicker () {
    clicks++;
    clicker__counter.textContent = clicks.toString();
    if(lastClickTime !== 0) {
        const delta = new Date() - lastClickTime;
        allClickTime = allClickTime + delta/1000;
        clickerSpeed.textContent = (clicks/allClickTime).toFixed(2);
    }
    lastClickTime  = new Date();

    if(cookie.width === 200) {
        cookie.width = 150;
    } else {
        cookie.width = 200;
    }
}

