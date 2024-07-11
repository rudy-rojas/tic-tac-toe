const Square = ({ value, handleClick }) => {
  return (
    <>
      <button className="square simbol-x" onClick={handleClick}>{value}</button>
    </>
  );
}

export default Square;