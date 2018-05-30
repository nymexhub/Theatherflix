// please inform by email any big changes please. 


var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


// import the main Component

 import Greeter from './components/Greeter.jsx'

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