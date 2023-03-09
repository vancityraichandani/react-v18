import logo from './logo.svg';
import './App.css';
import Comp1 from './components/Comp1';
import { useState, useEffect } from 'react';
console.log('outside')
function App() {
  const [st, setSt] = useState({k1: 'Key1', k2: 'Key2'})
  const [a, sa] = useState(0)
  
  useEffect(() => {
    console.log('effect');
  }, [st.k2])
  
  console.log('render comp' + a);

  const handleClick = () => {
    const newObj = {...st};
    newObj.k1 = 'hi'
    setSt(newObj);
    sa(pa => pa + 1)
    sa(pa => pa + 1)
    anotherfn(a);
    console.log('click' + a);
  }

  const anotherfn = () =>{
    console.log('another' + a);
  }
  return (
    <>
      <div className="App">
        <p onClick={handleClick} className="para">{st.k1}</p>
        <p onClick={handleClick} className="para">{a}</p>
        <p onClick={handleClick} className="para">{st.k2}</p>
        <Comp1 />
      </div>
    </>
  );
}

export default App;
