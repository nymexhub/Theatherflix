var React = require("react");
var ReactDOM = require("react-dom");
var {
  Route,
  Router,
  IndexRoute,
  Main,
  About,
  Upload,
  Editing,
  MovieList,
  hashHistory
} = require("react-router");
var Main = require("./components/Main.jsx");
var MovieList = require("./components/MovieList/MovieList.jsx");
var About = require("./components/About/About.jsx");
var About = require("./components/Upload/Upload.jsx");
var About = require("./components/Editing/Editing.jsx");

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={MovieList} />
      <Route path="about" component={About} />
      <IndexRoute component={About} />
      <Route path="upload" component={Upload} />
      <IndexRoute component={Upload} />
      <Route path="editing" component={Editing} />
      <IndexRoute component={Editing} />
    </Route>
  </Router>,
  document.getElementById("app")
);

// redux // postponed by founder.
// require('./redux-list.jsx');
