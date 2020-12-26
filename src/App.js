import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, reset } from './store/slice/Count';
import countSlice from './store/slice/Count'


function App() {
  const {count} = useSelector(state => state.countSlice)
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>Redux Counter {count} </h2>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default App;
