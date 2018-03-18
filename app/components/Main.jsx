var React = require('react');
var Nav = require('Nav');
// var createReactClass = require('create-react-class');


var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
      </div>
    );
  }
});

module.exports = Main;
