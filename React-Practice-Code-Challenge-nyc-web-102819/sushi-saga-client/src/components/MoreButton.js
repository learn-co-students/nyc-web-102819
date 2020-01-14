import React from 'react'

const MoreButton = (props) => {
    return <button onClick={props.handleMoreButton}>
            More sushi!
          </button>
}

export default MoreButton

/**
 * BASIC MOVE STATE LOGIC 
 * 1. pick where state needs to be (where and why)
 * 2. move state to that component
 * 3. move all relevant methods to that component 
 * 4. pass down props to the old component 
 * 5. update how you're referencing data and methods inside of the old component (what used to be this.state.whATEVRisCLEVER is now this.props.whATEVRisCLEVER)
 */