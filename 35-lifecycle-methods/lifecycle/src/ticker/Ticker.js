import React from 'react'

class Ticker extends React.Component {

  render(){
    return (
      <div className="box">
        <div style={{color: this.state.color}}>
          <h1>0</h1>
        </div>
      </div>
    );
  }
}

export default Ticker 