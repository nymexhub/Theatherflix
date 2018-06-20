var React = require("react");
var Nav = require("./Nav/Nav.jsx");
var MovieList = require("./MovieList/MovieList.jsx");
var About = require("./About/About.jsx");

// In this file I figure out how to show a movie.

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <Nav />
        <br />
        <MovieList />
      </div>
    );
  }
});

module.exports = Main;
