import Board from './components/Board';
import 'animate.css';
import Title from './components/Title';
import './styles/App.css';
const App = () => {
  return (
    <>
      <main className='page-wrapper shade-gradient'>
        <Title title={'Tic tac toe'} />
        <Board />
      </main>
    </>
  );
};

export default App;
