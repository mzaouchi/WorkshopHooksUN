import { useState } from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0)
  const [text,setText] = useState('')
  return (
    <div>
      <h1>Workshop HOOKS</h1>
      <button onClick={()=> setCount(count-1)}>-</button>
      <span>{count}</span>
      <button onClick={()=> setCount(count+1)}>+</button>
      <br/>
      <br/>
      <input onChange={(e)=> setText(e.target.value)} type='text'/>
      <h2>{text}</h2>
    </div>
  );
}

export default App;
