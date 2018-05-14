var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import {AppBar, Grid, Row, TextField, RaisedButton} from 'material-ui';

// Load foundation
// $(document).foundation();

// App css
// require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>Boilerplate 3 Project</p>,
//   document.getElementById('app')
// );


ReactDOM.render(
 
 
    
       
          <div>
            <div title='Movie Browser' />
    
     
                <AppBar movies={movies} isLoading={topMovies.isLoading} />
        
          </div>
 
 
);



require('./redux-movies.jsx');
// require('./redux-todo-ex.jsx');

