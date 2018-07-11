
import React from 'react';
import ReactDom from 'react-dom';

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// var Main = require('Main/Main.jsx');
// var MovieList = require('./components/MovieList/MovieList.jsx');
// var About = require('./components/About/About.jsx');
// import './app.scss';





ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="about" component={About}/>
          <IndexRoute component={MovieList}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

// redux 
//  require('./redux-redux.jsx');
//  + /* eslint-disable no-underscore-dangle */
//  const store = createStore(
//   reducer, /* preloadedState, */
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );
/* eslint-enable */

// require('./redux-ex.jsx');

require('./redux-redux.jsx');
