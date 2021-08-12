// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(res=>res.json())
      .then(js=>setItems(js))
  }, [resourceType])




  return (
    <>
      <button onClick={()=>setResourceType('posts')}>Posts</button>
      <button onClick={()=>setResourceType('users')}>Users</button>
      <button onClick={()=>setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
      <ul>
        {items.map(item=> <li>{JSON.stringify(item)}</li>)}
      </ul>
    </>
    
  );
}

export default App;
