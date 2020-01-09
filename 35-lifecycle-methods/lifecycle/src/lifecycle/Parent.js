import React from 'react'
import Child from './Child'

class Parent extends React.Component {

    render(){
        return (
            <div className="box">
            <button onClick={this.toggle}>Click</button>
            <p>Parent</p>
            <Child name="child"/>
            </div>
        );

    }
}

export default Parent 