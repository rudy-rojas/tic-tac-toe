import '../styles/Status.css';
const Status = ({ status }) => {
  const { turn, winner, isFinish } = status;
  let urlImage = turn === 'x' ? '/images/x.svg' : '/images/0.svg';
  return (
    <>
      <div className="status-game">
        {`Player `}
        <img src={urlImage} width={`40`} />
        {winner != '' ? `Won!!!` : `'x turn`}
      </div>
    </>
  );
};

export default Status;
