import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import MovieContainer from './Containers/MovieContainer';
import {API_BASE} from './constants';

class App extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount(){
    fetch(`${API_BASE}/movies`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        movies: data
      })
    })
  }


  render(){
    return (
      <div className="App">
        <NavBar user={this.state.currentUser} setUser={this.setUser}/> 
        <MovieContainer movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;