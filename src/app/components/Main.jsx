import React from ('react');
var Nav = require('Nav');
// In this file I figure out how to show a movie. 

var Main = React.createClass({
  render: () => {
    return (
      <div>
        <Nav/>
        <h2>Welcome to the list of the movies available</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;


/* 
Please if you code in this file please or another,  also add your email & name and date among the comments before and after any code we could write.
Thanks a lot!
Felipe - felipe@nodeio.us  - 13-04-2018
Antz - cheerantz@gmail.com - 20-04-2018
----------

*/ 