import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import { useState, useEffect, useRef } from 'react';

function App() {
  // const [st, setSt] = useState({ k1: 'Key1', k2: 'Key2' })
  const [a, sa] = useState(0)
  const c = useRef(1);

  console.log('render');

  function handleClick() {
    console.log('ref change');
    c.current += 1;
  }
  function handlesc() {
    console.log('state change');
    sa(a => a + 1)
  }

  return (
    <>
      <div className="App">
        <p onClick={handleClick} className="para">{c.current}</p>
        <p onClick={handlesc} className="para">{a}</p>
        <Comp1 />
      </div>
    </>
  );
}

export default App;
