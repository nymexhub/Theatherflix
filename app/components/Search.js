import React, { Component } from "react";
import { Input } from "react-bootstrap";

export default class MovieSearch extends Component {
  state = {
    term: "",
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });

    this.props.onChange(event.target.value);
  };

  render = () => {
    var keys = ["title", "description"];
    var movies;

    if (this.props.movies && this.props.movies.results) {
      movies = this.props.movies.results;
    } else {
      movies = [];
    }

    return (
      <Input
        type="text"
        value={this.state.term}
        placeholder="Enter your search term here"
        label="Movie search"
        ref="search"
        onChange={this.handleChange}
      />
    );
  };
}
