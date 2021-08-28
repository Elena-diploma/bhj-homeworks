let dead = document.getElementById("dead");
let miss = document.getElementById("lost");
let deadAmount = 0;
let missAmount = 0;

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function dropStat() {
    deadAmount = 0;
    missAmount = 0;
    dead.textContent = "0";
    miss.textContent = "0";
}

for (let index = 1; index <= 9; index++) {
    let hole = getHole(index);
    hole.onclick = function () {
        if (hole.classList.contains("hole_has-mole") === true) {
            deadAmount++;
            dead.textContent = deadAmount.toString();

        } else {
            missAmount++;
            miss.textContent = missAmount.toString();
        }

        if (deadAmount === 10) {
            dropStat();
            alert("Вы победили!");
        } else if (missAmount === 5) {
            dropStat();
            alert("Вы проиграли");
        }
    }
}