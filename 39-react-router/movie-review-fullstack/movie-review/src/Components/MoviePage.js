import React from 'react';
import NewReviewForm from './NewReviewForm';
import { API_BASE } from '../constants';

class MoviePage extends React.Component {
  state = {
    addingReview: false,
    movie: null
  }

  // componentDidMount(){
  //   fetch(`${API_BASE}/movies/${this.props.match.params.id}`)
  //     .then(res => res.json())
  //     .then(data => this.setState({ movie: data }))
  // }

  toggleNewReviewForm = () => {
    this.setState((prevState) => ({ addingReview: !prevState.addingReview }))
  }

  renderSingleReview = (review) => {
    return (
      <div key={review.id} className="review-box">
        <div>{review.stars > 0 ? "⭐️".repeat(review.stars) : "👎🏽"}</div>
        <div>{review.content}</div>
        <div>
          <span className="review-author">According to {review.author_name}</span>
          <span className="review-trash" onClick={() => this.deleteReview(review.id)}> &emsp;  🚮</span>
        </div>

      </div>
    )
  }

  renderReviews = (selectedMovie) => {
    return selectedMovie.reviews.length ? selectedMovie.reviews.map(review => this.renderSingleReview(review)) : "No reviews yet"
  }

  renderMovieInfo = (selectedMovie) => {
    return (
      <>
        <img alt="movie poster" src={selectedMovie ? selectedMovie.img : ""} />
        <div className="movie-info">
            <h2>{selectedMovie.title}</h2>
            <h4>{selectedMovie.director}</h4>
            <div>{selectedMovie.year}</div>
        </div>
        <div className="reviews-container">
          <h2>Reviews</h2>
          <button onClick={this.toggleNewReviewForm}>{this.state.addingReview ? "Close Form" : "Open Form"}</button>
          {this.state.addingReview && <NewReviewForm movieId={selectedMovie.id} toggleNewReviewForm={this.toggleNewReviewForm}/>}
          {this.renderReviews(selectedMovie)}
        </div>
      </>
    )
  }

  render() {
    console.log('MOVIE PAGE PROPS',this.props)
    let movieId = this.props.match.params.id;
    let selectedMovie = this.props.movies.find(movie => movie.id == movieId)

    return (
      <div className="movie-page">
          <div onClick={() => this.props.history.goBack()} className="back-button">⬅️</div>
          {/* make sure selectedMovie isn't null before you try to render anything */}
          {selectedMovie && this.renderMovieInfo(selectedMovie)} 
      </div>
    );
  }
}

export default MoviePage;
