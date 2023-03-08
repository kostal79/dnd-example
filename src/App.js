import { useSelector } from 'react-redux';
import './App.css';
import Board from './components/Board/Board';

function App() {
  const knightPosition = useSelector((state) => state.board.knightPosition)
  return (
      <div className="App">
        <Board knightPosition={knightPosition} />
      </div>
  );
}

export default App;
