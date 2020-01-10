import React from 'react'
import Ticker from './Ticker'

class TickerContainer extends React.Component {

  state = {
    number: 0,
    interval: null,
    color: 'black'
  }

  componentDidMount(){
    console.log('did mount')
    // set some interval to get a new random number every 1000ms
    let interval = setInterval(() => this.setState({number: Math.floor(Math.random()*100)}), 1000)
    this.setState({ interval })
  }

  // for the color feature ==> componentDidUpdate and prevState
  componentDidUpdate(prevProps, prevState){
    if(prevState.number < this.state.number && this.state.color !== 'green'){
      this.setState({ color: 'green'})
    } else if(prevState.number > this.state.number && this.state.color !== 'red') {
      this.setState({ color: 'red' })
    }
    //  else if( prevState.number === this.state.number){
    //   this.setState({color: 'yellow'})
    // }
    // console.log('updated')
  }

  // when we click the button, stop/start the interval
  handleClick = () => {
    if(this.state.interval){
      clearInterval(this.state.interval)
      this.setState({ interval: null })
    } else {
      let interval = setInterval(() => this.setState({number: Math.floor(Math.random()*100)}), 1000)
      this.setState({ interval })
    }
  }




  render(){
    // console.log('rendering', this.state.number)
    return (
      <div className="box">
        <button onClick={this.handleClick}>Stop/Start Ticker</button>
        <Ticker color={this.state.color} number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 