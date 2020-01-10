import React from 'react'
import Grandchild from './Grandchild'

class Child extends React.Component {

  constructor(){
    super();
    // console.log('CONSTRUCTING CHILD')
  }

  componentDidMount(){
    // console.log('DID MOUNT CHILD')
  }

  componentWillUnmount(){
    // REALWORLD ==> Slack, unsubscribe from rooms
    // remove intervals 
    // auto save
    
    console.log('UNMOUNTING CHILD')
  }

  render(){
    // console.log('RENDERING CHILD')

    return (
      <div className="box">
        <p>Child</p>
        <Grandchild name="grandchild"/>
      </div>
    );
  }
}

export default Child 