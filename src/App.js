import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(0)


  return (
    <div className="App">

      <div> count : {count}</div>
      <button onClick={
        ()=>{
          setcount((count)=> count+1)
        }
      }> click me</button>
        
    </div>
  );
}

export default App;
