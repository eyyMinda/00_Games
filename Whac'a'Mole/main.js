const holes = document.querySelectorAll('.col')
const scoreField = document.getElementById('scoreField')
const start = document.getElementById('start')
const restart = document.getElementById('restart')

function getRandomInt(min, max) { return Math.floor(Math.random() * (max - min) + min); }
let getRandom = getRandomInt(1, holes.length);
let holeActive = getRandom;
let score = 0, Reset = true; scoreGained = false;
let gameWon;

start.onclick = () => { Reset = false; runGame() };
restart.onclick = () => gameReset();

function runGame() {
    if (!Reset) {
        if (holeActive) {
            holes[getRandom].innerHTML += `
            <img class="my-5 text-center" src="./Assets/Mole.png" alt=""
            style="height: 100px; width: 100px; user-select: none">`
            holes[getRandom].classList.add('Active')
            holes[getRandom].onclick = () => { if (!scoreGained) { gainScore(); scoreGained = true; } }
        }
        setTimeout(() => {
            holes[getRandom].innerHTML = ''
            holes[getRandom].classList.remove('Active')
            holes[getRandom].onclick = () => console.log('stopped')
            getRandom = getRandomInt(1, holes.length)
            scoreGained = false;
            setTimeout(() => { runGame() }, getRandomInt(1, 15) + '00')
        }, getRandomInt(1, 15) + '00')

    }
}
function gainScore() {
    score++
    scoreField.textContent = score
    if (score === 50) { alert('You won! The Mole has been defeated!'); gameReset() }
}
function gameReset() {
    holes.innerHTML = ''
    Reset = true
    score = 0
    scoreField.textContent = 0
    holeActive = getRandom
}
