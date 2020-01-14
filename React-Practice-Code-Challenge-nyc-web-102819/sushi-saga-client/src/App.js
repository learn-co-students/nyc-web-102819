import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

// V1 - state on Sushi component --- 3
// V2 - update sushi object in App state.sushi array  --- 2
// V3 - hashing App state.eatenSushi --- LANDSLIDE

class App extends Component {
  state = {
    sushi: [],
    eatenSushis: {}, // ids as keys and check for each sushi if its id is in this array
    monies: 100

    // {1: true, 8: true, 10: true}[5] // constant time
    // [1,8,10].find(num => num === 5) // linear time 
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushi => {
      this.setState({ sushi })
    })
  }

  handleEatSushi = (id, price) => {
    if ( !this.state.eatenSushis[id] && price < this.state.monies ){
      this.setState({ eatenSushis: { ...this.state.eatenSushis, [id]: true }, monies: this.state.monies - price })
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <SushiContainer 
          sushi={this.state.sushi}
          handleEatSushi={this.handleEatSushi}
          eatenSushis={this.state.eatenSushis}/>
        <Table 
          emptyPlates={Object.keys(this.state.eatenSushis)}
          monies={this.state.monies}/>
      </div>
    );
  }
}

export default App;