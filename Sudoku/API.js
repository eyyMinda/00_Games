const options = {
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '6fff3f4d6fmsh01bdd094272a848p1765e3jsn3ee12ed88fac',
    'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
  }
};

function getNewBoard() {
  const difficulty = document.getElementById('difficulty').value || 'easy';

  fetch('https://sudoku-generator1.p.rapidapi.com/sudoku/generate?difficulty=' + difficulty, options)
    .then(response => response.json())
    .then(data => {
      setTimeout(() => {
        board = data.puzzle.match(/.{1,9}/g); //splits by 9 chars
        renderGame(board); getSolved(board);
      }, 1)
    })
  wrong = 0;
  faults.innerHTML = `Wrong attempts: ${wrong}`;
}

function getSolved(board) {
  setTimeout(() => {
    const toSolveURL = 'https://sudoku-generator1.p.rapidapi.com/sudoku/solve?puzzle=' + board.join('');

    fetch(toSolveURL, options)
      .then(response => response.json())
      .then(res => {
        solved = res.solution.match(/.{1,9}/g); //splits by 9 chars
      })
      .catch(console.warn)
  }, 200)
}