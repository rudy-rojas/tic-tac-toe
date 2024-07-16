const Square = ({ value, handleClick }) => {
  return (
    <>
      <button className={`square simbol-${value} ${value && `animate__bounceIn`}`} onClick={handleClick}></button>
    </>
  );
}

export default Square;