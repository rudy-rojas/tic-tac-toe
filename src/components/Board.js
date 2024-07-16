import Square from './Square';
import '../styles/Board.css';

const Board = ({ squares, handleClick, classSquares}) => {
  
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
