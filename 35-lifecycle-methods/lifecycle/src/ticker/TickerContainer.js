import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  render(){
    return (
      <div className="box">
        <button>Stop Ticker</button>
        <Ticker />
      </div>
    );
  }
}



export default TickerContainer 