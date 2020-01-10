import React from 'react'
import Child from './Child'

class Parent extends React.Component {

    state = {
        clicked: true,
        color: 'black'
    }

    componentDidMount(){
        console.log('DID MOUNT PARENT')
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    componentDidUpdate(prevProps, prevState) {

        // real world example ==> slack 
        // if( prevProps.channelName !== this.props.channelName ){
        //     // unsubscribe from prevProps.channelName
        //     // subscribe to this.props.channelName
        // }

        // GIGANTIC WARNING ON COMPONENT DID UPDATE
        // if(prevState.clicked !== this.state.clicked){
        //     this.setState({ color: 'red' })
        // } else {
        //     this.setState({ color: 'blue' })
        // }

        // console.log()

    }

    render(){
        // console.log('RENDERING PARENT')
        return (
            <div className="box" style={{color: this.state.color}}>
                <button onClick={this.handleClick}>Click</button>
                <p>Parent</p>
                {this.state.clicked && <Child name="child"/>}
            </div>
        );

    }
}


export default Parent;