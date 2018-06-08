var React = require("react");
var ReactDOM = require("react-dom");
var { Route, Router, IndexRoute, hashHistory } = require("react-router");
var Main = require("Main");
var MovieList = require("./components/MovieList/MovieList");
var About = require("./components/About/About");
import "./app.scss";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="About" component={About} />
      <IndexRoute component={MovieList} />
    </Route>,
  </Router>,
  document.getElementById("app")
);

// redux
//require('./redux-list.jsx');
