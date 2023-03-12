import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import { useState, useEffect, useRef } from 'react';

function App() {
  // const [st, setSt] = useState({ k1: 'Key1', k2: 'Key2' })
  const [a, sa] = useState(0)
  const [b, sb] = useState(5)
  const c = useRef(1);

  console.log('render');

  function handleA() {
  }
  function handleB() {
    sa(a => a + 1)
    console.log('a changed');
    for(let i = 0; i < 3000000000; i++) { }
    sb(b => b + 1)
    console.log('b changed');
  }

  return (
    <>
      <div className="App">
        <p onClick={handleA} className="para">{a}</p>
        <p onClick={handleB} className="para">{b}</p>
        <Comp1 />
      </div>
    </>
  );
}

export default App;
