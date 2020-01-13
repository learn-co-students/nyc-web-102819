import React from 'react';

class SelectorBar extends React.Component {
    render() {
        return (
            <div id="cat-selector">
                <div onClick={this.props.handleSelector} id="all" className={`selector ${this.props.view === 'all' ? 'active' : ''}`}>All</div>
                <div onClick={this.props.handleSelector} id="favorites" className={`selector ${this.props.view === 'favorites' ? 'active' : ''}`}>Favorites</div>
                <div onClick={this.props.handleSelector} id="matches" className={`selector ${this.props.view === 'matches' ? 'active' : ''}`}>Matches</div>
            </div>
        )

    }

}

export default SelectorBar;