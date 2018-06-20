var React = require("react");
var { Link } = require("react-router");
//import './Nav.scss';

var Nav = React.createClass({
  render: function() {
    return (
      <section className="nav">
        <div>
          <h2>Welcome to Theatherflix</h2> | <Link to="/">Home Movie List</Link>
          | <Link to="/About">About</Link>
        </div>
      </section>
      // <div >
      // <h2>Welcome to Theatherflix</h2> | <Link to="/">Home</Link> | <Link to="/about">About</Link>
      // </div>
    );
  }
});

module.exports = Nav;
