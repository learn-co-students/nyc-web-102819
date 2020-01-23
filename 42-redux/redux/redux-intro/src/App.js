import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false,
    thangs: []
  }

  like = () => {
    this.setState({ likes: this.state.likes + 1})
  }

  dislike = () => {
    this.setState({ likes: this.state.likes - 1})
  }

  toggleDark = () => {
    this.setState({ darkMode: !this.state.darkMode})
  } 

  handleChange = (text) => {
    this.setState({ text })
  }

  addText = () => {
    this.setState({text: "", thangs: [...this.state.thangs, this.state.text]})
  }

  render(){

    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={this.toggleDark}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={(event) => this.handleChange(event.target.value)}/>
        <button onClick={this.addText}>Add!</button>

        <h4>{this.state.likes} likes</h4>
        <button onClick={this.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={this.like}>
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