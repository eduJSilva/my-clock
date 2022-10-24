import { useSelector, useDispatch} from 'react-redux';
import {useRef} from 'react';

import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import moment from 'moment';

import {
  selectBreakLength,
  selectSessionLength,
  selectTimeLeft,
  selectTimerLabel,
  selectAudio,
  reset, 
  breakDecrement, 
  breakIncrement, 
  sessionIncrement, 
  sessionDecrement,
  countDown,
  changeLabel,
  newCountdownBegins,
  newSessionBegins,
} from './clockSlice';

let label='Session';

export function Clock() {
    const breakLength = useSelector(selectBreakLength);
    const sessionLength = useSelector(selectSessionLength);
    const timeLeft = useSelector(selectTimeLeft);
    const audio = useSelector(selectAudio);
   

    const dispatch = useDispatch();

    const audioRef = useRef(null);

function timer() {
  if (timeLeft <=0)
  return '00:00';
  if (timeLeft ===3600)
  return '60:00';
 return moment(timeLeft*1000).format("mm:ss")
}

setTimeout(()=>
{ 
  if(label==='Break' && timeLeft===0) {
    label='Session'; 
    dispatch(newSessionBegins());  
    audioRef.current.play();
    dispatch(countDown());
  }},1000)
      
    setTimeout(()=>{
    if(label==='Session' && timeLeft===0) {
      label='Break';
      dispatch(newCountdownBegins());   
      audioRef.current.play();
      dispatch(countDown()); 
       }
    },1000);

  
     
 


  return (
    <Container fluid="md">
    <Card className="text-center">
      <Card.Header style={{backgroundImage:`url("https://images.pexels.com/photos/707582/pexels-photo-707582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, border: '6px outset', borderRadius: '2%'}}><h1>25 + 5 Clock</h1></Card.Header>
    </Card>

  <Row>
    <Col md="5"> 
      <Row><p id="session-label"><b>Session Length</b></p></Row>
      <Row className="counter">
        <Col md="2">
          <Button id="session-decrement" type="button"  onClick={() => dispatch(sessionDecrement())} className="btn btn-default">-</Button>        
        </Col>
        <Col md="1">
        <div id="session-length">{sessionLength}</div>
        </Col>
        <Col md="2">
          <Button id="session-increment" type="button"  onClick={() => dispatch(sessionIncrement())} className="btn btn-default">+</Button>
        </Col>
      </Row>
    </Col>
    <Col md="2"></Col>
    <Col md="5"> 
      <Row><p id="break-label"><b>Break Length</b></p></Row>
      <Row className="counter">
        <Col md="2">
          <Button id="break-decrement" type="button"   onClick={() => dispatch(breakDecrement())} className="btn btn-default">-</Button>        
        </Col>
        <Col md="1">
        <div id="break-length">{breakLength}</div>
        </Col>
        <Col md="2">
          <Button id="break-increment" type="button"  onClick={() => dispatch(breakIncrement())} className="btn btn-default">+</Button>
        </Col>
      </Row>
    </Col>
  </Row>
  <br/>
  <Row id="statRow">
  <h3 id="timer-label">{label}</h3>
    <div id="stats">
    <h1 id="time-left">{timer()}</h1>
    </div> 
  </Row>

    <Col>   
     <span> <Button  variant="success" size="lg" id="start_stop" type="button" onClick={() => dispatch(countDown())}>Start/Stop</Button></span>     
     <span>  <Button  variant="warning" size="lg" id="reset" type="button" onClick={() => {dispatch(reset()); label='Session'}}>Reset</Button></span>
    </Col>
     
      <audio ref={audioRef} id="beep" src={audio}></audio>
    
      <br/>
  
  </Container>
  );
}
