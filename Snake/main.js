const canvas = document.getElementById('canvas'); const ctx = canvas.getContext('2d');
document.body.addEventListener('keydown', keyDown)

let score = 0;
let speed = 10;

let tileCount = 20;
let tileSize = canvas.clientWidth / tileCount - 2;

const snakeParts = [];
let tailLength = 2;
let headX = 10; //19 max
let headY = 10; //19 max

let velocityX = 0;
let velocityY = 0;

let appleX = 6;
let appleY = 6;


function renderGame() {
    moveSnake();
    let res = isGameOver();
    if (res) return;
    clearScreen();
    renderSnake();
    checkCollision();
    renderApple();
    renderScore();
    setTimeout(renderGame, 1000 / speed);
}

function isGameOver() {
    let gameOver = false;
    if (velocityY === 0 && velocityX === 0) return false;
    for (let i = 0; i < snakeParts.length; i++) {
        if (snakeParts[i].x === headX && snakeParts[i].y === headY) gameOver = true; break;
    }
    if (gameOver) {
        ctx.fillStyle = 'darkred';
        ctx.font = "50px verdana";
        ctx.fillText("Game over! ", canvas.clientWidth / 6.5, canvas.clientHeight / 2);
    }
    return gameOver;
}
function renderScore() {
    ctx.fillStyle = "white";
    ctx.font = "10px verdena";
    ctx.fillText("Score: " + score, canvas.clientWidth - 50, 10);
}
function checkCollision() {
    if (appleX == headX && appleY == headY) {
        appleX = Math.floor(Math.random() * tileCount);
        appleY = Math.floor(Math.random() * tileCount);
        tailLength++;
        score++;
    }
}
function moveSnake() {
    if (headX == 19 && velocityX == 1) { headX = 0; }
    else if (headX == 0 && velocityX == -1) { headX = 19; }
    else headX = headX + velocityX;

    if (headY == 0 && velocityY == -1) { headY = 19; }
    else if (headY == 19 && velocityY == 1) { headY = 0; }
    else headY = headY + velocityY;
}
function keyDown(e) {
    switch (e.keyCode) {
        case 38: if (velocityY != 1) { velocityY = -1; velocityX = 0; } break; //up
        case 40: if (velocityY != -1) { velocityY = 1; velocityX = 0; } break; //down
        case 37: if (velocityX != 1) { velocityY = 0; velocityX = -1; } break; //left
        case 39: if (velocityX != -1) { velocityY = 0; velocityX = 1; } break; //right
    }
}
function renderSnake() {
    ctx.fillStyle = 'orange';
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);

    ctx.fillStyle = 'green';
    for (let i = 0; i < snakeParts.length; i++) {
        let part = snakeParts[i];
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    }
    snakeParts.push(new snakePart(headX, headY));
    if (snakeParts.length > tailLength) snakeParts.shift();
    ctx.fillStyle = "orange";
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}
function renderApple() {
    ctx.fillStyle = 'red';
    ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}
function clearScreen() {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

class snakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

renderGame();