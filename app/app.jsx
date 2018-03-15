// Coding by Felipe Alfonso Gonzalez -  Software Engineer/Developer  CC 2018
// ---------------------------------------------------------------
// for future adjustaments from other coders please refactoring is necessary.

// import react and its dom
import React from 'react'
import ReactDOM from 'react-dom'


// routing with react and the module react-router

var {Route, Router, IndexRoute, hashHistory} = require('react-router'); 
var Main = require('Main');


var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


// import the main Component

// import Greeter from './components/Greeter.jsx'

// var to make a welcome ... from me
// Pass data to the components if necessary

// the renderer
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
  
      </Route>
    </Router>,
    document.getElementById('app')
  );
  

// import Greeter from './components/greeter'

// var to make a welcome ... from me
// Pass data to the components if necessary
// const title = 'Felipe the Founder welcomes you!'
// const message = 'Our first Component'

// // the renderer
// ReactDOM.render(<Greeter title={title} message={message} />, document.getElementById('app'))