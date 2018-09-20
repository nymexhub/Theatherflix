
import React from 'react';
import ReactDom from 'react-dom';

const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
const MovieList = require('./components/MovieList/MovieList');
const About = require('./components/About/About');
import './app.scss';





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
