import React, { Component } from "react";
import reactBootstrap from "react-bootstrap";
import PopularMoviesList from "./PopularMoviesList";
import MovieSearch from "./Search.js";

export default class Movies extends Component {
  state = {
    movies: {},
    searchTerm: "",
  };

  // function when the PopularMoviesList loads movies
  handleMovies = (error, movies) => {
    this.setState({
      movies: movies,
    });
  };

  onSearchTermChange = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm,
    });
  };

  render = () => {
    return (
      <div className="container">
        <h1 className="text-success">
          Most popular movies{" "}
          <small className="text-info">
            Look through the most popular movies
          </small>
        </h1>
        <MovieSearch
          movies={this.state.movies}
          onChange={this.onSearchTermChange}
        />
        <PopularMoviesList
          searchTerm={this.state.searchTerm}
          onMovies={this.handleMovies}
        />
      </div>
    );
  };
}
