const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clickerSpeed = document.getElementById('clicker__speed');
let lastClickTime = Date.now();
let allClickTime = 0;
let clicks = 0;

cookie.onclick = clicker;
function clicker () {
    clicks++;
    clicker__counter.textContent = clicks.toString();
    if(lastClickTime !== 0) {
        const delta = new Date() - lastClickTime;
        allClickTime = allClickTime + delta/1000;
        clickerSpeed.textContent = (1/allClickTime).toFixed(2);
    }
    lastClickTime  = new Date();

    cookie.width = clicks % 2 ? 250 : 200;
}

