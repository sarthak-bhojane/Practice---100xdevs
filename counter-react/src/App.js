import React, { useState } from 'react';
import './App.css';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
     <div>
         {count}
          <button onClick={() => setCount(count + 1)} > click me  </button>

          <Display/>
     </div>
    </div>
  );
}



export default App;
