
import React from 'react';
import ReactDom from 'react-dom';

var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');
var MovieList = require('./components/MovieList/MovieList.jsx');
var About = require('./components/About/About.jsx');
 





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
// require('./redux-list.jsx');
