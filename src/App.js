// import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('')
  const renderCount = useRef(1)
  const prevName = useRef('')
  
  useEffect(()=>{
     renderCount.current++
     prevName.current=name
  }, [name])

  return (
    <>
      <input value={name} onChange={e=>setName(e.target.value)}></input>
      <h2>My name is {name} and I rendered {renderCount.current} times. It used to be {prevName.current}</h2>
    </>
  );
}

export default App;
