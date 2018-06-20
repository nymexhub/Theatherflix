var React = require("react");
var { Link } = require("react-router");
//import './Nav.scss';

var Nav = React.createClass({
  render: function() {
    return (
      <section className="nav">
        <div>
          | <Link to="/">Home Movie List</Link>
          | <Link to="/about">About</Link>
          | <Link to="/upload">Upload videos</Link>
          | <Link to="/editing">Editing data</Link>
          |
          <br />
        </div>
      </section>
     
    );
  }
});

module.exports = Nav;
