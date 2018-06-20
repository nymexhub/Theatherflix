var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, Main, About, MovieList, hashHistory} = require('react-router');
var Main = require('./components/Main.jsx');
var MovieList = require('./components/MovieList/MovieList.jsx');
var About = require('./components/About/About.jsx');
//import './app.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="about" component={About}/>
          <IndexRoute component={MovieList}/>
    </Route>
  </Router>,
  document.getElementById('app')
);

// redux // postponed by founder.
// require('./redux-list.jsx');