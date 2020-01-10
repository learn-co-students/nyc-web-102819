import React from 'react';

const HogDetail = (props) => {
    let { greased, specialty, weight } = props.hog; 

    return (
        <div>
            <div>Speciality: {specialty}</div>
            <div>Weight: {weight}</div>
            <div>{greased ? "Greased" : "Not Greased"}</div>
            <div>Medals: {props.hog['highest medal achieved']}</div>
        </div>
    )
}

export default HogDetail;