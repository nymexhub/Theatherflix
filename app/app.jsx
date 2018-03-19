var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var ListM = require('ListM');
var About = require('About');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="about" component={About}/>
          <IndexRoute component={ListM}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
