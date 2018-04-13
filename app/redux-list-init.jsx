var redux = require('redux');

// starting up redux 
console.log('Starting up redux');

// °|°|°|°|°|°|°

// UNDER DEVELOPMENT !!!!!!!!!!!!!!!!!

// this is all for testing purposes !
// Well the final final that we have to focus on , it's actually totally diffferent, it's not this. It's 'redux-movies-jsx'
// we have to work in the file!

/* 

******
Let's try to create an algorithm from  this file */


/* 
Please if you code in this file please or another,  also add your email & name and date among the comments before and after any code we could write.
Thanks a lot!
Felipe - felipe@nodeio.us  - 13-04-2018
----------

*/ 


var reducer = (state = {name: 'Anonymous'}, action) => {

    //  state = state || {name: 'Anonymous'}; 
    // console.log('New action', action); 

    switch (action.type) {
        case 'CHANGE_MOVIE':   
           return {
        ...state, 
        name: action.name
           }; 
           default :
           return state; 
    }
}; 


// lines in case to work with redux developer tools 
// not working  2018
// var store = redux.createStore(reducer, /* preloadedState, */
//     +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// this way to make it work fine with devtoolsextension is working fine - DDON'T CHANGE IT OR INFORM IT.
// working fine 
var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));



// A little testing here 
// var unsuscribe = store.subscribe(() => {
//     var state = store.getState();
//     console.log('Movie is ', state.name); 
//     document.getElementById('welcome').innerHTML = "Welcome to Theatherflix, we're moving forward !";
//     document.getElementById('app').innerHTML = state.name;
// }); 


var unsuscribe =  store.subscribe(() => {
              var state = store.getState(); 
              console.log('Movie is', state.name); 
              document.getElementById('welcome').innerHTML = "Welcome to theatherflix we're moving forward. !"; 
              document.getElementById('app').innerHTML = state.name; 
}); 

// unsuscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch( {
   type: 'CHANGE_MOVIE', 
   name: 'movie1'
}); 

store.dispatch( {
    type: 'CHANGE_MOVIE', 
    name: 'movie2'
 }); 

 store.dispatch( {
    type: 'CHANGE_MOVIE', 
    name: 'movie3'
 }); 
 store.dispatch( {
     type: 'CHANGE_MOVIE',
     name: 'movies4'

 }); 

// console.log('Name should be m1', store.getState());