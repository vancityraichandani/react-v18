import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import { useState, useEffect, useRef } from 'react';

function App() {
  // const [st, setSt] = useState({ k1: 'Key1', k2: 'Key2' })
  const [a, sa] = useState('')
  const [ct, sct] = useState(0)
  const c = useRef(1);

  console.log('render');

  useEffect(()=>{
    sct(ct => ct + 1);
  })

  function handleClick() {
    // console.log('ref change');
    // c.current += 1;
  }
  function handlesc() {
    console.log('state change');
    sa(a => a + 1)
  }

  return (
    <>
      <div className="App">
        <input value={a} type="text"/>
        <p onClick={handleClick} className="para">{ct}</p>
        {/* <p onClick={handleClick} className="para">{c.current}</p> */}
        <p onClick={handlesc} className="para">{a}</p>
        <Comp1 />
      </div>
    </>
  );
}

export default App;
