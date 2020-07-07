import { Router, Route, Link, hashHistory } from "reac-router";

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);
