// vendor
import React from "react";
// component
import FormHeader from "../FormHeader/FormHeader";
// styles
import "./AddMovieForm.css";
import { withRouter, Link } from 'react-router-dom'

class AddMovieForm extends React.Component {
  state = {
    Genre: 'Science Fiction'
  }
  submitHandle = (e) => {
    e.preventDefault();
    const movie = {
      MovieName: this.state.MovieName,
      Genre: this.state.Genre,
      rating: this.state.rating,
      Website: this.state.Website
    }
    this.props.setMovie(movie);
    this.props.history.push("/");
  }

  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  render() {
    return (
      <div className="row">
        <FormHeader formTitle={"Add your favorite movie"} />

        <Link to="/"><button
          className="add-movie-button">
          <i className="fa fa-long-arrow-left" aria-hidden="true" />
        </button>
        </Link>


        <div className="col-12 form-body ui center container segment">
          <form className="border-4 border-secondary" action="#" onSubmit={this.submitHandle}>
            <div className="wrapper">
              <label className="label" htmlFor="MovieName">
                Movie Name*
              </label>
              <input required id="MovieName" name="MovieName" type="text" tabIndex="1" onChange={this.changeHandle} />
            </div>
            <div className="wrapper">
              <label className="label" id="Genre" htmlFor="Genre">
                Genre*
              </label>
              <select required name="Genre" onChange={this.changeHandle} value={this.state.Genre}>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Drama">Drama</option>
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Documentary">Documentary</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="wrapper form-check form-check-inline">
              <label className="label" htmlFor="rating">
                Rating*
              </label><div >
                <input required type="radio" name="rating" value="1" onChange={this.changeHandle} />1
              <input type="radio" name="rating" value="2" onChange={this.changeHandle} />2
              <input type="radio" name="rating" value="3" onChange={this.changeHandle} />3
              <input type="radio" name="rating" value="4" onChange={this.changeHandle} />4
              <input type="radio" name="rating" value="5" onChange={this.changeHandle} />5
              </div>
            </div>
            <div className="wrapper">
              <label className="label" htmlFor="Website">
                Website
              </label>
              <input type="url" id="Website" name="Website" onChange={this.changeHandle} />
            </div>
            <div className="wrapper submit-btn">
              <input
                id="Submit"
                name="Submit"
                type="submit"
                value="Submit"
                tabIndex="5"

              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(AddMovieForm);
