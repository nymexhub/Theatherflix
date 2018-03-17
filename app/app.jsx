// 


var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//it's needed this npm package to do createReactClass



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);



