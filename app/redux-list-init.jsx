var redux = require('redux');

// starting up redux 
console.log('Starting up redux');
// we're gonna start to build the next stage with redux to load the movies. :=)

// This code and many other code is part of the process that I'm taking to the project of having something cool with redux...
// kinda creaating in my head while I'm coding here part of its algorithm .... 

// °|°|°|°|°|°|°

// this is all for testing purposes !

var reducer = (state = {name: 'Anonymous'}, action) => {

    //  state = state || {name: 'Anonymous'}; 
    // console.log('New action', action); 

    switch (action.type) {
        case 'CHANGE_NAME':   
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

// working fine 
var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));



// A little testing here 
var unsuscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('Movie is', state.name); 
}); 
// unsuscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch( {
   type: 'CHANGE_NAME', 
   name: 'm1'
}); 



store.dispatch( {
    type: 'CHANGE_NAME', 
    name: 'm2'
 }); 

// console.log('Name should be m1', store.getState());