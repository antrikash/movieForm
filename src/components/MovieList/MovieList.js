import React, { Component } from "react";

import FormHeader from "../FormHeader/FormHeader";
import "./MovieList.css";
import { Link } from 'react-router-dom'
class MovieList extends Component {
  state = {
    message: 'No movies found to display'
  }
  newTab = (movie) => () => {
    window.open(`${movie.Website}`)
  }
  render() {
    // TODO:: The list shown should be sorted by ratings, in descending order
    // TODO:: If no data in movieList, show message - 'No movies found to display'
    const list = this.props.movieList.length > 0 && this.props.movieList.map((movie, index) => {
      return (
        <div className="movie" key={index}>
          <span className="link-style" onClick={this.newTab(movie)}> {movie.MovieName}</span>
          <div>({movie.Genre})</div>
          <div>
            <span className="fa fa-star orange" /> {movie.rating}/5
            </div>
        </div>
      );
    });

    return (
      <div>
        <FormHeader formTitle="Movie list" />
        <Link to="/add-movie"><button
          className="add-movie-button"
        >
          <i className="fa fa-plus" />
        </button>
        </Link>
        {!this.props.movieList.length > 0 ? this.state.message : list
        }

      </div>
    );
  }
}

export default MovieList;
