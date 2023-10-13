const fetchApiKey = async () => {
  try {
    const response = await fetch('/api/get-api-key');
    if (response.ok) {
      return await response.json().apiKey;
    } else {
      console.error('Failed to retrieve the API key');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return '';
  }
};

let apiKey = '', options = {};

const getNewBoard = async () => {
  const difficulty = document.getElementById('difficulty').value || 'easy';
  if (apiKey == '') {
    apiKey = await fetchApiKey();
    options = {
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': apiKey || '6fff3f4d6fmsh01bdd094272a848p1765e3jsn3ee12ed88fac',
        'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
      }
    };
  }

  try {
    await fetch('https://sudoku-generator1.p.rapidapi.com/sudoku/generate?difficulty=' + difficulty, options)
      .then(response => response.json())
      .then(data => {
        board = data.puzzle.match(/.{1,9}/g); //splits by 9 chars
        renderGame(board); getSolved(board);
      })
    wrong = 0;
    faults.innerHTML = `Wrong attempts: ${wrong}`;
  } catch (error) {
    console.log(error);
  }

}

const getSolved = async board => {
  try {
    await fetch('https://sudoku-generator1.p.rapidapi.com/sudoku/solve?puzzle=' + board.join(''), options)
      .then(response => response.json())
      .then(data => {
        solved = data.solution.match(/.{1,9}/g); //splits by 9 chars
      })
  } catch (error) {
    console.warn(error)
  }
}
