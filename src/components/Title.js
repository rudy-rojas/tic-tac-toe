import './Title.css';
const Title = ({ title }) => {
  return (
    <>
      <h1 className='main-title animate__bounceIn'>{title}</h1>
    </>
  );
};

export default Title;
