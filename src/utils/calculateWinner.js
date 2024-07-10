const calculateWinner = (squares) => {
  let result = null;
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  let i = 0;
  while (i < lines.length && !result) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      result = squares[a];
    }
    else {
      i++;
    }
  }
  return result;
}
export default calculateWinner;