var React = require('react');
var Nav = require('./Nav/Nav.jsx');
var MovieList = require('./MovieList/MovieList.jsx');
var MovieList = require('./About/About.jsx');

// In this file I figure out how to show a movie. 

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <p>Theatherflix Beta</p>
        <MovieList/>
      </div>
    );
  }
});

module.exports = Main;
