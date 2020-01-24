import React from 'react';
import './App.css';
import { connect as cnx } from 'react-redux';
import { likeCreator, dislikeCreator, toggleCreator, addTextCreator, handleChangeCreator, rainbowCreator } from './actionCreators';

/**
 * key elements of react-redux?
 * Provider
 * connect
 * msp ==> mapStateToProps
 * mdp ==> mapDispatchToProps
 */

 /**
  * Changing the text color ==> random color on a button click  ==> 7
  * 
  * 
  * 
  * Toggle to show the added text or hide it ==>3
  * Add gif  ==> 5
  * On click ANYTHING rotate through cat images ==> 4
  * If the comment is silly (*cough dumb cough*) set likes to -100000000000000000000000  ==> 9
  * Nah we good (just talk us through what youd do) ==> 
  */

 function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



class App extends React.Component {

  render(){
    console.log('COLOR', this.props.color)
    return (
      <div style={{color: this.props.color}} className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggle}>Dark mode</button>
        <button onClick={this.props.rainbowChange}>RANDOM RAINBOW</button>
        <h3>{this.props.text}</h3>
        <input 
          name="text" 
          value={this.props.text} 
          onChange={(event) => this.props.handleChange(event.target.value)}/>
        <button onClick={this.props.addText}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={this.props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={this.props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.props.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  let { likes, text, darkMode, thangs, color } = state;

  return {
    likes,
    text,
    darkMode,
    thangs,
    color
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    like: () => dispatch(likeCreator()),
    dislike: () => dispatch(dislikeCreator()),
    toggle: () => dispatch(toggleCreator()),
    addText: () => dispatch(addTextCreator()),
    handleChange: (text) => dispatch(handleChangeCreator(text)),
    rainbowChange: () => dispatch(rainbowCreator()),
  }
}


export default cnx(mapStateToProps, mapDispatchToProps)(App);

// CURRYING ==> FAIR GAME FOR ALGOS
// https://blog.bitsrc.io/understanding-currying-in-javascript-ceb2188c339