


import React from ("react");
import ReactDOM from ("react-dom");
const {
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
const Main = require("./components/Main.jsx");
const MovieList = require("./components/MovieList/MovieList.jsx");
const About = require("./components/About/About.jsx");
const About = require("./components/Upload/Upload.jsx");
const About = require("./components/Editing/Editing.jsx");




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    

      <IndexRoute component={MovieList} />
    </Route>
  </Router>,
  document.getElementById("app")
);



//




//


// redux 
// require('./redux-list.jsx');
require('./redux-movies.jsx');


