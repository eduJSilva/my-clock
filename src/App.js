import React from 'react';
import logo from './logo.svg';
import { Clock } from './features/clock/Clock';
//import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
    </div>
  );
}

export default App;
