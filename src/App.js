import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  function decrementCount () {
    setCount(count - 1)
  }
  function incrementCount () {
    setCount(count + 1)
  }
  const [count, setCount] = useState(1)

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <img src={logo}></img>
    </>
    
  );
}

export default App;
