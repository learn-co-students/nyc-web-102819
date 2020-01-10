import React from 'react'

class Grandchild extends React.Component {

  constructor(){
    super();
    // console.log('CONSTRUCTING GRANDCHILD')
  }
  
  componentDidMount(){
    // anything we want to do once the component is actually on the screen 
    // fetching 
    // subscribing to rooms ==> 
    // intervals 
    // console.log('DID MOUNT GRANDCHILD')
  }

  componentWillUnmount(){
    console.log('UNMOUNTING GRANDCHILD')
  }
  
  render(){
    // console.log('RENDERING GRANDCHILD')
    return (
      <div className="box">
        <p>Grandchild</p>
      </div>
    );
  }
}

export default Grandchild 


// CONSTRUCTING PARENT
// CONSTRUCTING CHILD
// CONSTRUCTING GRANDCHILD
// RENDERING PARENT
// RENDERING CHILD
// RENDERING GRANDCHILD

// CONSTRUCTING PARENT
// CONSTRUCTING CHILD
// CONSTRUCTING GRANDCHILD
// RENDERING GRANDCHILD
// RENDERING CHILD
// RENDERING PARENT

// CONSTRUCTING PARENT
// RENDERING PARENT
// CONSTRUCTING CHILD
// RENDERING CHILD
// CONSTRUCTING GRANDCHILD
// RENDERING GRANDCHILD




// DID MOUNT GRANDCHILD
// DID MOUNT CHILD
// DID MOUNT PARENT


// UNMOUNTING CHILD
// UNMOUNTING GRANDCHILD


// UNMOUNTING GRANDCHILD
// UNMOUNTING CHILD