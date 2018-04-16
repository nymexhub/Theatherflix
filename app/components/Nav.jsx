var React = require('react');
var {Link} = require('react-router');

var Nav = React.createClass({
  render: function () {
    return (
      <div >
      <h2>Welcome to Theatherflix</h2> | <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </div>
    );
  }
});

module.exports = Nav;


/* 
Please if you code in this file please or another,  also add your email & name and date among the comments before and after any code we could write.
Thanks a lot!
Felipe - felipe@nodeio.us  - 13-04-2018
----------

*/ 