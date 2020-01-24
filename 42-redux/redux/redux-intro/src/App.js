import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false,
    thangs: []
  }

  dispatch = (type, payload) => {
    let newState = this.reducer(type, payload)

    this.setState(newState)
  }

  reducer = (type, payload) => {
    switch(type){
      case 'LIKE': 
        return { likes: this.state.likes + 1}
      case 'DISLIKE': 
        return { likes: this.state.likes - 1}
      case 'TOGGLE': 
        return { darkMode: !this.state.darkMode }
      case 'HANDLE_CHANGE': 
        return { text: payload }
      case 'ADD_TEXT': 
        return { text: "", thangs: [...this.state.thangs, this.state.text] }
      default: 
        return {}
    }
  }

  // dislike = () => {
  //   this.setState({ likes: this.state.likes - 1})
  // }

  // toggleDark = () => {
  //   this.setState({ darkMode: !this.state.darkMode})
  // } 

  // handleChange = (text) => {
  //   this.setState({ text })
  // }

  // addText = () => {
  //   this.setState({text: "", thangs: [...this.state.thangs, this.state.text]})
  // }

  render(){

    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch('TOGGLE')}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={(event) => this.dispatch('HANDLE_CHANGE', event.target.value)}/>
        <button onClick={() => this.dispatch('ADD_TEXT')}>Add!</button>

        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.dispatch('DISLIKE')}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={() => this.dispatch('LIKE')}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.state.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}

export default App;