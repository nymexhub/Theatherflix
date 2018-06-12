// 


var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, Main, About, MovieList} = require('react-router');
var Main = require('Main');
// import {Route, Router, IndexRoute, hashHistory, Main, About, MovieList} from 'react-router-dom';
// import Uploader from './containers/Uploader';

var Main = require('./Main.jsx');
var MovieList = require('./MovieList.jsx');
var About = require('./components/About/About.jsx');
// import './app.scss';


// import the main Component

// import Greeter from './components/Greeter.jsx'

// var to make a welcome ... from me
// Pass data to the components if necessary



 ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="about" component={About}/>
          <IndexRoute component={MovieList}/>
    </Route>
  </Router>,
  document.getElementById('app')
);





// import Greeter from './components/greeter
 //var to make a welcome ... from me
// Pass data to the components if necessary
// const title = 'Felipe the Founder welcomes you!'
// const message = 'Our first Component'

// // the renderer
 // ReactDOM.render(<Greeter title={title} message={message} />, document.getElementById('app'))