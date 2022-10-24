import React from 'react';
import { Clock } from './features/clock/Clock';
import  "../src/scss/stylessheet.scss"
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
      </header>
      <section>      
        <div>
    
        <strong>25 + 5 Clock</strong> <h5>React-Redux Toolkit app</h5> 
        
        <span>
          <span>Designed and Coded By </span>
          <a
            className="Portfolio-EJS"
            href="https://porfolioeduardojsilva.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Eduardo J. Silva
          </a>
        </span>
        </div>
        </section>
    </div>
  );
}

export default App;
