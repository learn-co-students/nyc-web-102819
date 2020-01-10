import React from 'react';
import HogDetail from './HogDetail';

class HogCard extends React.Component {
    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    // return value of invoked handleClick() is undefined 

    render(){

        let { name, dirty } = this.props.hog; 
        let { toggleDirty } = this.props;

        return (
            <div className="pigTile">
                <img src={`hog-imgs/${name.split(' ').join('_')}.jpg`} alt={this.props.hog.name}/>
                <div>{this.props.hog.name}</div>
                <button onClick={() => toggleDirty(name)}>{ dirty ? 'Shower Hog' : 'Play in the Mud'}</button>
                <button onClick={this.handleClick}>More Info</button>
                { this.state.clicked && <HogDetail hog={this.props.hog} />  }
            </div>
        )
    }  

}

export default HogCard;