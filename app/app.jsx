var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
// $(document).foundation();

//   App css
// require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>Boilerplate 3 Project</p>,
//   document.getElementById('app')
// );




var CHANGE_NAME = document.getElementById('app_video')
function renderer(state, dispatch) {
  ReactDOM.render(
    <Application state={state} dispatch={dispatch} />,
    CHANGE_NAME
    

  )

}




// trying to get fixed a bunch of lines. 
// require('./redux-ex.jsx');
// require('./redux-todo-ex.jsx');



// var React = require('react');
// var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// import {AppBar, Grid, Row, TextField, RaisedButton} from 'material-ui';

// Load foundation
// $(document).foundation();

// App css
// require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>Boilerplate 3 Project</p>,
//   document.getElementById('app')
// );


// ReactDOM.render(
 
 
    
       
//           <div>
//             <div title='Movie Browser' />
    
     
//                 <AppBar movies={movies} isLoading={isLoading} />
        
//           </div>
 
 
// );