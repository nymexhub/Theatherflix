var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var ListM = require('ListM');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
          <IndexRoute component={ListM}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
