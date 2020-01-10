import React, { Component } from 'react';

class FilterContainer extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.toggleGreased}>{this.props.greasedOnly ? "Show All Hogs" : "Show Only Greased"}</button>
                <select onChange={(e) => this.props.selectSort(e.target.value)}>
                    <option value="no sort">No Sort</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
        )
    }
}

export default FilterContainer;