const fetchApiKey = async () => {
  try {
    const response = await fetch('/api/get-api-key');
    if (response.ok) {
      const data = await response.json();
      return data.apiKey
    } else {
      console.error('Failed to retrieve the API key');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
  return '';
};

let apiKey = '';
const options = {
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Host': 'sudoku-generator1.p.rapidapi.com'
  },
};

const fetchSudoku = async (url) => {
  if (apiKey === '') {
    apiKey = await fetchApiKey();
    options.headers['X-RapidAPI-Key'] = apiKey;
  }

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const getNewBoard = async () => {
  const difficulty = document.getElementById('difficulty').value || 'easy';
  const data = await fetchSudoku(`https://sudoku-generator1.p.rapidapi.com/sudoku/generate?difficulty=${difficulty}`);
  board = data.puzzle.match(/.{1,9}/g); //splits by 9 chars
  renderGame(board);
  getSolved(board);
  wrong = 0;
  faults.innerHTML = `Wrong attempts: ${wrong}`;
}

const getSolved = async (board) => {
  const data = await fetchSudoku(`https://sudoku-generator1.p.rapidapi.com/sudoku/solve?puzzle=${board.join('')}`);
  solved = data.solution.match(/.{1,9}/g); //splits by 9 chars
}