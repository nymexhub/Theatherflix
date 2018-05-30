
/*

If you code in this file mail me please about your thoughts f.alfonso@res-ear.ch 

*/

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
// $(document).foundation();

//   App css
// require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>xxxxx</p>,
//   document.getElementById('app')
// );

var video = document.getElementById('app_video') == '<iframe width="1821" height="641" src="https://www.youtube.com/embed/wL1V1eURgDI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'; 
return video;

function renderer(state, dispatch) {
  ReactDOM.render(
  
    <Application state={state} dispatch={dispatch} />,
    
    
  )


  

}

// require('./redux-ex.jsx');
// require('./redux-movies.jsx');



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

 
