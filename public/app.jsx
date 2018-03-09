
// Coding by Felipe Alfonso Gonzalez -  Software Engineer/Developer  C2018 -Present
// ---------------------------------------------------------------

// for future adjustaments from other coders please refactoring is necessary.

// this file is going to be rendered by WEBPACK ! 

// Calling the React and react-dom Vars and modules ... .
var React = require("react");
var ReactDOM = require("react-dom"); 

// calling out the freeter from the components 
var Greeter = require('./components/Greeter');



// the render 
ReactDOM.render(
    <Greeter />,
    document.getElementById('app')
);




