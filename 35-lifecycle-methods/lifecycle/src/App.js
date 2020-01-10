import React from 'react';
import logo from './logo.svg';
import './App.css';

import TickerContainer from "./ticker/TickerContainer"
// import LifeCycleApp from "./lifecycle/LifeCycleApp"

function App() {
  return (
    <div className="App">  
     {/* <LifeCycleApp /> */}
     <TickerContainer />
    </div>
  );
}

export default App;