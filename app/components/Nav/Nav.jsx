var React = require("react");



var { Link } = require("react-router");
//import './Nav.scss';

var Nav = React.createClass({
  render: function() {
    return (
      <section className="Nav">
        <div>
          | <Link to="/"><a href="/">Home Movie List</a></Link>
          | <Link to="/about"><a href="/about">About</a></Link>
          | <Link to="/upload">Upload videos</Link>
          | <Link to="/editing">Editing data</Link>
          | <Link to="/credits">Credits</Link>
          |
          <br />
        </div>
      </section>
     
    );
  }
});

module.exports = Nav;
