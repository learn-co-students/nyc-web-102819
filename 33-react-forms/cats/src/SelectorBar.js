import React from 'react';

class SelectorBar extends React.Component {
    render() {
        return (
            <div id="cat-selector">
                <button onClick={this.props.loadCats}>Load Cats</button>
                <div id="all" className={`selector ${this.props.view === 'all' ? 'active' : ''}`} onClick={(e) => { this.props.handleClick(e); this.props.selectCat(null) }}>All</div>
                <div onClick={this.props.handleClick} id="favorites" className={`selector ${this.props.view === 'favorites' ? 'active' : ''}`}>Favorites</div>
                <div onClick={this.props.handleClick} id="matches" className={`selector ${this.props.view === 'matches' ? 'active' : ''}`}>Matches</div>
            </div>
        )

    }

}

export default SelectorBar;