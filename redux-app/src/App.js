import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incNumber, decNumber } from './Action/index';

function App() {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <a onClick={ () => dispatch(decNumber())}><span>-</span></a>
      <input type='text' value={myState}/>
      <a onClick={ () => dispatch(incNumber())}><span>+</span></a>
    </div>
  );
}

export default App;
