let board = [
  "007491605",
  "200060309",
  "000007010",
  "058600004",
  "003000090",
  "006200187",
  "904070002",
  "670830000",
  "810045000"
];
let solved = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763"
];
let numbers, digits, numSelected;
let wrong = 0, isSolved = false;

const boardField = document.getElementById('board');
const digitsField = document.getElementById('digits');
const faults = document.getElementById('faults');

window.onload = function () { renderDigits(); getNewBoard(); }

function renderDigits() {
  digitsField.innerHTML = '';
  for (let i = 1; i < 10; i++) {
    let digit = document.createElement('div');
    digit.classList.add('digit');
    digit.textContent = i;
    digit.addEventListener('click', selectNum);
    digitsField.appendChild(digit);
  }
}

function renderGame(param) {
  param === solved ? isSolved = true : isSolved = false;
  board = board;
  boardField.innerHTML = '';

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement('div');
      tile.id = r.toString() + '-' + c.toString();
      tile.classList.add('tile');
      tile.addEventListener('click', selectTile);
      if (r == 2 || r == 5) tile.classList.add('horizontal-seperation');
      if (c == 2 || c == 5) tile.classList.add('vertical-seperation');
      if (param[r][c] !== 0) {
        tile.textContent = param[r][c];
        tile.classList.add('tile-start');
      }
      boardField.appendChild(tile);
    }
  }
}

function selectNum() {
  if (numSelected != null) numSelected.classList.remove('selected');
  numSelected = this;
  numSelected.classList.add('selected');
}

function isFilled() {
  if (!board.toString().includes('0')) { alert('Great job logic boy!'); return };
  if (isSolved) alert('It would be nice if you would solve it yourself, but you know... you do you.');
}

function selectTile() {
  isFilled();
  let a = this.id.split('-');
  if (numSelected) {
    if (solved[a[0]][a[1]] !== Number(numSelected.textContent)) {
      wrong++;
      faults.innerHTML = `Wrong attempts: ${wrong}`;
      return;
    }
    if (this.innerText == '') {
      this.innerText = numSelected.textContent;
      board[a[0]][a[1]] = Number(numSelected.textContent);
    }
  }
}


function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
      return false;
    }
  }
  return true;
}


function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '0') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
            if (sodokoSolver(data)) {
              return true;
            } else {
              data[i][j] = '0';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}


