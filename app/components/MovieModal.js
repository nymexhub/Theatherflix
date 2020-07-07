import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Modal, Button, Input } from "react-bootstrap";
import themoviedb from "../../lib/themoviedb/themoviedb.js";
import Loader from "react-loader";
import _ from "lodash";

// MovieModal a customize Modal for displaying information about the movie
// MovieModal is a stateless component and is controlled by the proms
export default class MovieModal extends Component {
  state = {
    genres: {},
    imageLoad: false,
  };

  componentDidMount = () => {
    this.getGenres();
  };

  getGenres = () => {
    themoviedb.genres.getList(
      {},
      (data) => {
        var genres = JSON.parse(data).genres;
        console.log(genres);

        if (!genres || _.isEmpty(genres)) {
          return;
        }

        var genresObj = {};
        genres.forEach((value, index, array) => {
          genresObj[value.id] = value.name;
        });

        this.setState({
          genres: genresObj,
        });
      },
      (error) => {
        console.error(error);
      }
    );
  };

  onHide = (event) => {};

  onImageLoad = () => {
    this.setState({
      imageLoad: true,
    });
  };

  render() {
    var spinnerOpts = {
      lines: 13, // The number of lines to draw
      length: 35, // The length of each line
      width: 20, // The line thickness
      radius: 42, // The radius of the inner circle
      scale: 0.25, // Scales overall size of the spinner
      corners: 0.9, // Corner roundness (0..1)
      color: "#000", // #rgb or #rrggbb or array of colors
      opacity: 0.2, // Opacity of the lines
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      speed: 1, // Rounds per second
      trail: 63, // Afterglow percentage
      fps: 20, // Frames per second when using setTimeout() as a fallback for CSS
      zIndex: 2e9, // The z-index (defaults to 2000000000)
      className: "spinner", // The CSS class to assign to the spinner
      top: "50%", // Top position relative to parent
      left: "50%", // Left position relative to parent
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      position: "relative", // Element positioning
    };

    var movie = this.props.movie || {};

    if (!movie || _.isEmpty(movie)) {
      return false;
    } else {
      var genres = movie.genre_ids.map((value) => {
        var genres_link = `https://www.themoviedb.org/genre/${value}`;
        return (
          <a key={value} href={genres_link}>
            {this.state.genres[value]}{" "}
          </a>
        );
      });

      return (
        <div className="movie-modal">
          <Modal
            show={this.props.show}
            onHide={this.props.onHide}
            container={this}
            aria-labelledby="movie-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="movie-modal-title">{movie.title}</Modal.Title>
              <small>
                <b>Rating: </b>
                {movie.vote_average}/10 ({movie.vote_count} votes)
              </small>
              <p>
                <b>Genres: </b>
                {genres}
              </p>
              <p>
                <b>Release Date:</b> {movie.release_date}
              </p>
            </Modal.Header>
            <Modal.Body>
              <div className="center-block">
                <a
                  href={"http://image.tmdb.org/t/p/w500" + movie.poster_path}
                  data-lightbox={movie.title + " poster"}
                  data-title={movie.title + " Movie Poster"}
                >
                  <img
                    className="center-block img-responsive"
                    width="240px"
                    height="320px"
                    src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                    alt={movie.title + " Poster"}
                    onLoad={this.onImageLoad}
                  />
                </a>
              </div>
              <hr />
              {movie.overview}
            </Modal.Body>
            <Modal.Footer>
              <Button href={"https://www.themoviedb.org/movie/" + movie.id}>
                Check it out on TheMovieDB
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
  }
}
