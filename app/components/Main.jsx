var React = require('react');
var Nav = require('./Nav/Nav');
var MovieList = require('./MovieList/MovieList');
// In this file I figure out how to show a movie. 

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <p>Beta</p>
        <MovieList/>
      </div>
    );
  }
});

module.exports = Main;
