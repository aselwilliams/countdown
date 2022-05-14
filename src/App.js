import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [time, setTime]=useState(0);
  const [timerOn, setTimerOn] =useState(false)
  return (
    <div className="App">
     <main>
        <div id="display-timer">00:20:33</div>
        <button onClick={()=>setTimerOn(false)} id="stop-timer">Stop Timer</button>
        <button onClick={()=>setTimerOn(true)} id="stop-timer">Resume Timer</button>
        <button onClick={()=>setTimerOn(true)} id="stop-timer">Start Timer</button>
        <button onClick={()=>setTime(0)} id="stop-timer">Reset Timer</button>
    </main>
    </div>
  );
}

export default App;
