import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import {
  selectBreakLength,
  selectSessionLength,
  selectTimeLeft,
  selectAudio,
  reset, 
  breakDecrement, 
  breakIncrement, 
  sessionIncrement, 
  sessionDecrement,
  countDown,
  newCountdownBegins
} from './clockSlice';
//import styles from './Clock.module.css';

export function Clock() {
  //const count = useSelector(selectCount);
    const breakLength = useSelector(selectBreakLength);
    const sessionLength = useSelector(selectSessionLength);
    const timeLeft = useSelector(selectTimeLeft);
    const audio = useSelector(selectAudio);
  const dispatch = useDispatch();
 // const [incrementAmount, setIncrementAmount] = useState('2');
 // const incrementValue = Number(incrementAmount) || 0;

/*
 function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


 let [count, setCount] = useState(25);

  useInterval(() => {
    if(console.log()=== "d"){}
    setCount(count - 1);
  }, 1000);
*/



 let timerLabel = ""

 if (timeLeft===0){
 setTimeout(function(){
 
    timerLabel= "Break"
    const audioStart = new Audio(audio);
    audioStart.play();
  }, 1000);
  
   dispatch(breakDecrement());
   dispatch(countDown())
   dispatch(newCountdownBegins());
}

else{ timerLabel="Session"}
 
  
  
  


  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <div>
      <button  id="break-decrement" type="button"   onClick={() => dispatch(breakDecrement())}>break-decrement</button>
      <div id="break-length">{breakLength}</div>
      <button  id="break-increment" type="button"  onClick={() => dispatch(breakIncrement())}>break-increment</button>
      </div>
      <div>
      <button id="session-decrement" type="button"  onClick={() => dispatch(sessionDecrement())}>session-decrement</button>
      <div id="session-length">{sessionLength}</div>
      <button id="session-increment" type="button"  onClick={() => dispatch(sessionIncrement())}>session-increment</button>
      </div>
      <div id="timer-label">{timerLabel}</div>
      <h3 id="time-left">{moment(timeLeft).format("mm:ss")}</h3>
      <button id="start_stop" type="button"   onClick={() => dispatch(countDown())}>start_stop</button>
      <button id="reset" type="button" onClick={() => dispatch(reset())}>reset</button>
     {/* <h2>{count}</h2>  */}
      <audio id="beep" src={audio}></audio>
      {/*


User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

User Story #22: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.

User Story #23: When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.

User Story #24: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.

User Story #25: When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.

*/}
    </div>
  );
}
