import redux from ('redux');
import ReactDOM from ('react-dom');
import {Route, Router, IndexRoute, hashHistory} from ('react-router');

var Main = require('Main');
var ListM = require('ListM');
var About = require('About');

/* 
Please if you code in this file please or another,  also add your email & name and date among the comments before and after any code we could write.
Thanks a lot!
Felipe - felipe@nodeio.us  - 13-04-2018
Antz - cheerantz@gmail.com - 20-04-2018
----------

*/ 


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
// redux - for testing
require('./redux-list-init.jsx');

// final file with refux.... I will separate everything by logical files
// require('./redux-movies.jsx');

