const Square = ({ value, handleClick, classSquare}) => {
  return (
    <>
      {/* <button className={`square simbol-${value} animate__animated ${value && `animate__bounceIn`}`} onClick={handleClick}></button> */}
      <button className={`square simbol-${value} animate__animated ${classSquare}`} onClick={handleClick}></button>
    </>
  );
}

export default Square;