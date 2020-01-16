import React from 'react';
import MovieCard from '../Components/MovieCard'
import MoviePage from '../Components/MoviePage';
import { Route, Switch } from 'react-router-dom';
// import { Switch as MaterialSwitch } from '@material-ui/core';

class MovieContainer extends React.Component {

  // OLD PRE ROUTER
  // selectMovie = (id) => {
  //   this.setState({
  //     selectedMovie: id
  //   })
  // }

  selectMovie = (id) => {
    console.log('selecting movie ', id)
    this.props.history.push(`/movies/${id}`)
  }


  // update onClick to update the URL to movies/:id when a movie is clicked ===> done
  // remove state from MovieContainer
  // use the route to determine if we're looking at a single movie and fetch that movie, then render its info

  render(){
    return (
      <div className="movie-container">
          <Switch>
            <Route exact path="/movies" render={() => this.props.movies.map(movie => <MovieCard key={movie.id} handleClick={this.selectMovie} movie={movie} />)} />
            <Route path="/movies/:id" render={(routerProps) => <MoviePage {...routerProps} movies={this.props.movies}/>}/>
          </Switch>
      </div>
    );
  }
}

// {...routerProps} ===> this.props.match
// routerProps={routerProps} ==> this.props.routerProps.match

export default MovieContainer;