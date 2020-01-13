import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    front: true
  }

  handleFlip = () => {

    /** NEW FEATURE ALERT: flip images
     * so... what do we need to track? Which image we're looking at/if its been clicked ==> state
     * after we add state, we need some way to change it ==> method & onClick 
     */
    this.setState({ front: !this.state.front })
  }
  
  render() {
    let { name, stats, sprites } = this.props.mon;
    // console.log(this.props)

    // in stats array, find object with name === 'hp' and grab its value
    let hp = stats.find(statistic => statistic.name === 'hp').value

    // LATER: BACK OF CARD & FLIPPING
    return (
      <Card>
        <div onClick={this.handleFlip}>
          <div className="image">
            <img alt="oh no!" src={this.state.front ? sprites.front : sprites.back } />
          </div>
          <div className="content">
          <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
