import { useState } from "react";
import Square from "./Square";
import calculateWinner from "../utils/calculateWinner";
import '../styles/Board.css'

const Board = () => {
  const [squares, setSquares] = useState(Array.from({ length: 9 }).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  let status;
  let winner;

  const handleClick = (i) => {
    if (!squares[i] && !winner) {
      const copySquares = squares.slice();
      copySquares[i] = xIsNext ? 'X' : '0';
      setSquares(copySquares);
      setXIsNext(!xIsNext);
    }
  }

  winner = calculateWinner(squares);
  if (winner) {
    status = `Winner: Player ${winner}`
  } else {
    status = `Player ${xIsNext ? `X` : `0`}'s turn`
  }

  return (
    <>
        <p>Status: {status}</p>
      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} handleClick={() => handleClick(0)} />
          <Square value={squares[1]} handleClick={() => handleClick(1)} />
          <Square value={squares[2]} handleClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} handleClick={() => handleClick(3)} />
          <Square value={squares[4]} handleClick={() => handleClick(4)} />
          <Square value={squares[5]} handleClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} handleClick={() => handleClick(6)} />
          <Square value={squares[7]} handleClick={() => handleClick(7)} />
          <Square value={squares[8]} handleClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

export default Board;