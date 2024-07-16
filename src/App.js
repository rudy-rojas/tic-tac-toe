import Board from './components/Board';
import 'animate.css';
import Title from './components/Title';
import './styles/App.css';
import { useState } from 'react';
import calculateWinner from './utils/calculateWinner'
const App = () => {
  const [squares, setSquares] = useState(Array.from({ length: 9 }).fill(null));
  const [classSquares, setClassSquares] = useState(
    Array.from({ length: 9 }).fill('')
  );

  const [xIsNext, setXIsNext] = useState(true);

  // let winner;
  const [winner, setWinner] = useState('');
  // winner = calculateWinner(squares);

  let status;
  const handleClick = (i) => {
    let copyClassSquares = classSquares.slice();
    if (!squares[i] && winner === '') {

      copyClassSquares[i] = 'animate__bounceIn';
      setClassSquares(copyClassSquares);

      const copySquares = squares.slice();
      copySquares[i] = xIsNext ? 'x' : 'o';
      setSquares(copySquares);
      setXIsNext(!xIsNext);

      const calculatedWinner = calculateWinner(copySquares);
      if (calculatedWinner[0]) {
        console.log(calculatedWinner)
        let copyClassSquares = classSquares.slice();
        const [a, b, c] = calculatedWinner[1];
        // setWinner(copySquares);
        setWinner(calculatedWinner[0]);
        copyClassSquares[a] = 'animate__flash';
        copyClassSquares[b] = 'animate__flash';
        copyClassSquares[c] = 'animate__flash';
        setClassSquares(copyClassSquares);
      }
    }

  };

  if (winner) {
    status = `Winner: Player ${winner}`;

  } else {
    status = `Player ${xIsNext ? `X` : `o`}'s turn`;
  }

  return (
    <>
      <main className='page-wrapper shade-gradient'>
        <Title title={'Tic tac toe'} />
        <Board squares={squares} handleClick={handleClick} classSquares={classSquares} />
      </main>
    </>
  );
};

export default App;
