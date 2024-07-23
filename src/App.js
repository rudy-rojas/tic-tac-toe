import { useEffect, useState } from 'react';
import Title from './components/Title';
import Board from './components/Board';
import Status from './components/Status';
import calculateWinner from './utils/calculateWinner';

import 'animate.css';
import './styles/App.css';

const App = () => {
  const [squares, setSquares] = useState(Array.from({ length: 9 }).fill(null));
  const [classSquares, setClassSquares] = useState(
    Array.from({ length: 9 }).fill('')
  );

  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState('');
  const [status, setStatus] = useState({
    turn: 'x',
    isFinish: false,
    winner: '',
  });
  useEffect(() => {
    handleStatus();
  }, [xIsNext]);

  // let status = { turn: 'x', isFinish: false, winner: '' };
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
        console.log(calculatedWinner);
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

  const handleStatus = () => {
    if (winner) {
      setStatus((state) => ({ ...state, isFinish: true, winner: winner }));
    } else {
      setStatus((state) => ({ ...state, turn: `${xIsNext ? `x` : `o`}` }));
    }
  };

  console.log(status);

  return (
    <>
      <main className="page-wrapper shade-gradient">
        <Title title={'Tic tac toe'} />
        <Status status={status} />
        <Board
          squares={squares}
          handleClick={handleClick}
          classSquares={classSquares}
        />
      </main>
    </>
  );
};

export default App;
