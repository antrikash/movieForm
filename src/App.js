import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieList from "./components/MovieList/MovieList";
import AddMovieForm from "./components/AddMovieForm/AddMovieForm";

class App extends React.Component {
  state = {
    list: []
  }
  setMovie = movie => {
    this.setState(prevState => ({
      list: [...prevState.list,movie]
    }));
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/add-movie" render ={() => <AddMovieForm setMovie={this.setMovie}/>} />
            <Route exact path="/" render={() => <MovieList movieList={this.state.list}/>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
