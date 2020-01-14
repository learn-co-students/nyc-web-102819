import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
let numSushiPerPage = 6;


class SushiContainer extends React.Component {
  // need to track which index to start at ==> 0 initially
  // render four past that index 
  state = {
    startIndex: 0
  }

  handleMoreButton = () => {
    // if we're already at the end... set index back to zero 
    // at the end ===> if startIndex is 96 or above if this.state.startIndex > this.props.sushi.length - 4
    // console.log(this.state.startIndex)
    if(this.state.startIndex > this.props.sushi.length - (numSushiPerPage + 1)) {
      this.setState({ startIndex: 0 })
    } else {
      this.setState({ startIndex: this.state.startIndex + numSushiPerPage })
    }
  }
  
  render(){
    let displaySushis = this.props.sushi.slice(this.state.startIndex, this.state.startIndex + numSushiPerPage)
    let { handleEatSushi, eatenSushis } = this.props;

    return (
      <Fragment>
        <div className="belt">
          {
            displaySushis.map(sushiInfo => 
                  <Sushi 
                    key={sushiInfo.id} 
                    sushiInfo={sushiInfo} 
                    handleEatSushi={handleEatSushi} 
                    eaten={eatenSushis[sushiInfo.id]}/>
            )
          }
          <MoreButton handleMoreButton={this.handleMoreButton}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer