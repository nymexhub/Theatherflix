

// import React from ('react');
// import ReactDOM from ('react-dom');

// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
//$(document).foundation();

// App css
//require('style!css!sass!applicationStyles')

// all into redux now

// require('./redux-example.jsx');


var PrintTemplate = require('react-print');
var ReactDOM = require('react-dom');
var React = require('react');

var MyTemplate = React.createClass({

render() {
    const onClick = () => store.dispatch({ type: 'CHANGE_MOVIE' });
      return (
        <PrintTemplate>
        <div>
          <h1>To-dos</h1>
          <div>
            Learn Redux&nbsp;
            <input
              type="checkbox"
              checked={!!this.state.checked}
             onClick={onClick} />
          </div>
          
          {
            this.state.checked ? (<h2>Done!</h2>) : null
          }
        </div>
        </PrintTemplate>
      );
    }
  });



ReactDOM.render(<MyTemplate/>, document.getElementById('print-mount'));



require('./redux-redux.jsx');

