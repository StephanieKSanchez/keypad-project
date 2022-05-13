import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState("")
 
  return (
    <div className="App">
      <header className="App-header">
      <button> {count}</button>&nbsp;
        <p>
          <button onClick={()=>setCount(count + "1")}>1</button>
          <button onClick={()=>setCount(count + "2")}>2</button>
          <button onClick={()=>setCount(count + "3")}>3</button>
        </p>
        <p>
          <button onClick={()=>setCount(count + "4")}>4</button>&nbsp;
          <button onClick={()=>setCount(count + "5")}>5</button>&nbsp;
          <button onClick={()=>setCount(count + "6")}>6</button>&nbsp;
        </p>
        <p>
          <button onClick={()=>setCount(count + "7")}>7</button>&nbsp;
          <button onClick={()=>setCount(count + "8")}>8</button>&nbsp;
          <button onClick={()=>setCount(count + "9")}>9</button>&nbsp;
        </p>
        <p>
          <button onClick={()=>setCount("")}>Clear</button>&nbsp;
          <button onClick={()=>setCount(count + "0")}>0</button>&nbsp;
          <button>Enter</button>&nbsp;
        </p>
      </header>
    </div>
  );
}

export default App;
