

// import React from ('react');
// import ReactDOM from ('react-dom');

// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
//$(document).foundation();

// App css
//require('style!css!sass!applicationStyles')

// all into redux now

// require('./redux-example.jsx');

render() {
    const onClick = () => store.dispatch({ type: 'CHANGE_MOVIE' });
      return (
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
      );
    }

require('./redux-redux.jsx');

