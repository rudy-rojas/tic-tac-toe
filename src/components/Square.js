const Square = ({ value, handleClick }) => {
  return (
    <>
      <button className={`square simbol-${value}`} onClick={handleClick}>{value}</button>
    </>
  );
}

export default Square;