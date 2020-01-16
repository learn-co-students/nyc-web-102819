import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import MovieContainer from './Containers/MovieContainer';
import {API_BASE} from './constants';
import { Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route exact path="/" render={() => <div>HOME SWEET HOME</div>} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          {/* <Route path="/movies/:id" render={() => <div>DIS A MOVIE 🎞</div>} /> */}
          <Route path="/movies" render={(routerProps) => <MovieContainer {...routerProps} movies={this.state.movies}/>}/>
        </Switch>
      </div>
    )
  }
}

/**
 * routerProps ===> {match: {}, history: {}, location: {}}
 * match={routerProps.match}
 */

export default App;