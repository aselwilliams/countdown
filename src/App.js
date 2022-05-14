import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [time, setTime]=useState(1405000);
  const [timerOn, setTimerOn] =useState(true);

  useEffect(()=>{
    let interval=null;
    if(timerOn) {
      interval = setTimeout(()=> {
        setTime(prevState=>prevState-1000)
    },1000);
    } else {
      clearTimeout(interval)
    }
    if(time==0){
      clearTimeout(interval)
  } 
  return ()=>clearTimeout(interval)
  },[timerOn][time])

  return (
    <div>
     <main className='card-box'>
        <h1>Countdown</h1>
        <div id="display-timer">
            <span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)} : </span>
            <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)} : </span>
            <span>{('0' + ((time / 1000) % 60)).slice(-2)}</span>
        </div>
        <button onClick={()=>setTimerOn(!timerOn)} className={timerOn ? 'stop' : 'resume'}>
          {timerOn ? 'Stop Timer' : 'Resume Timer'}
        </button>
    </main>
    </div>
  );
}

export default App;
