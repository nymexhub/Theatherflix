var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var ListM = require('ListM');
var About = require('About');


// °°||||||||||

// I'm having problems with foundation to add the style ...


// Load foundation
// $(document).foundation();

// App css
// require('style!css!sass!applicationStyles')


// **********




// ReactDOM.render(
//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//     <Route path="about" component={About}/>
//           <IndexRoute component={ListM}/>
//     </Route>
//   </Router>,
//   document.getElementById('app')
// );



// This code and many other code is part of the process that I'm taking to the project of having something cool with redux...
// kinda creaating in my head while I'm coding here part of its algorithm .... 

// °|°|°|°|°|°|°

//testing out with redux and thinking in an algorithm 
// redux 
require('./redux-list-init.jsx');

// require('./redux-movies.jsx');

