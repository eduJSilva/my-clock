import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  
} from './clockSlice';
import styles from './Clock.module.css';

export function Clock() {
  //const count = useSelector(selectCount);
  const dispatch = useDispatch();
 // const [incrementAmount, setIncrementAmount] = useState('2');

 // const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <button  id="break-decrement" type="button"></button>
      <button id="session-decrement" type="button"></button>
      <button  id="break-increment" type="button"></button>
      <button id="session-increment" type="button"></button>
      <div id="break-length" onLoad={5}></div>
      <div id="session-length" onLoad={25}></div>
      <div id="timer-label">Session</div>

      {/*


User Story #8: I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).

User Story #9: I can see a clickable element with a corresponding id="start_stop".

User Story #10: I can see a clickable element with a corresponding id="reset".

User Story #11: When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to its default state. */}
    </div>
  );
}
