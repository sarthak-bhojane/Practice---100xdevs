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
          {/* component </> */}
     </div>
    </div>
  );
}



export default App;




{/*
  <html>
    <head>
        <title>counter</title>
    </head>
    <body>
    <button id="btn" onClick="update()"> count is 0 </button>
    <script>
        let count = 0;
        function update(){
        document.getElementById("count").innerText = `count is ${count}`;
            count = count + 1;
        }
    </script>
    </body>
  */}