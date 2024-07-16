import { useState } from 'react';
import Square from './Square';
import calculateWinner from '../utils/calculateWinner';
import '../styles/Board.css';

const Board = () => {
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
    console.log('handleClick winner:'+winner)
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
    <div className='board'>
      <div className='board-row'>
        <Square
          value={squares[0]}
          handleClick={() => handleClick(0)}
          classSquare={classSquares[0]}
        />
        <Square
          value={squares[1]}
          handleClick={() => handleClick(1)}
          classSquare={classSquares[1]}
        />
        <Square
          value={squares[2]}
          handleClick={() => handleClick(2)}
          classSquare={classSquares[2]}
        />
      </div>
      <div className='board-row'>
        <Square
          value={squares[3]}
          handleClick={() => handleClick(3)}
          classSquare={classSquares[3]}
        />
        <Square
          value={squares[4]}
          handleClick={() => handleClick(4)}
          classSquare={classSquares[4]}
        />
        <Square
          value={squares[5]}
          handleClick={() => handleClick(5)}
          classSquare={classSquares[5]}
        />
      </div>
      <div className='board-row'>
        <Square
          value={squares[6]}
          handleClick={() => handleClick(6)}
          classSquare={classSquares[6]}
        />
        <Square
          value={squares[7]}
          handleClick={() => handleClick(7)}
          classSquare={classSquares[7]}
        />
        <Square
          value={squares[8]}
          handleClick={() => handleClick(8)}
          classSquare={classSquares[8]}
        />
      </div>
    </div>
  );
};

export default Board;
