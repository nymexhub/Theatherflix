import React, { Component } from "react";
import reactBootstrap, { ListGroup, ListGroupItem } from "react-bootstrap";
import MovieModal from "./MovieModal.js";
import themoviedb from "../../lib/themoviedb/themoviedb.js";

// updating the api_key in the moviedb
themoviedb.common.api_key = "22be462e6d3de1dbab03d1ca50847b5a";

export default class PopularMoviesList extends Component {
  state = {
    movies: [],
    movie: {},
    show: false,
  };

  getMovies = () => {
    var self = this;

    themoviedb.movies.getPopular(
      {},
      function (movies) {
        movies = JSON.parse(movies);
        if (movies.results && movies.results.length > 0) {
          self.setState({
            movies: movies.results,
          });

          self.props.onMovies(null, movies);
        }
      },
      function (error) {
        // do something with errorCallback
        console.error(error);
        self.props.onMovies(error);
      }
    );
  };

  componentDidMount = () => {
    this.getMovies();
  };

  onClick = (movie) => {
    console.log(movie);
    console.log("clicked");
    this.setState({
      movie: movie,
      show: true,
    });
  };

  onHide = () => {
    this.setState({
      show: false,
    });
  };

  render = () => {
    var term = this.props.searchTerm;
    var filteredMovies = [];

    if (this.state.movies.length > 0) {
      if (typeof term == "string" && term && term.trim()) {
        filteredMovies = this.state.movies.filter((value) => {
          return value.title.toLowerCase().match(term) != null;
        });
      } else {
        filteredMovies = this.state.movies;
      }

      var movies = filteredMovies.map((value, index, array) => {
        return (
          <ListGroupItem
            onClick={this.onClick.bind(this, value)}
            key={value.id}
            href={"#/movies/" + value.id}
          >
            {value.title}
          </ListGroupItem>
        );
      });

      return (
        <div className="PopularMovies">
          <ListGroup>{movies}</ListGroup>
          <MovieModal
            onHide={this.onHide}
            show={this.state.show}
            movie={this.state.movie}
          ></MovieModal>
        </div>
      );
    } else {
      return false;
    }
  };
}
