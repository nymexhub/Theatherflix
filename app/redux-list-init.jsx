var redux = require('redux');

// starting up redux 
console.log('Starting up redux');

// °|°|°|°|°|°|°

// UNDER DEVELOPMENT !!!!!!!!!!!!!!!!!

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
    document.getElementById('app').innerHTML = state.name;
}); 
// unsuscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch( {
   type: 'CHANGE_NAME', 
   name: 'movie1'
}); 



store.dispatch( {
    type: 'CHANGE_NAME', 
    name: 'movie2'
 }); 

 store.dispatch( {
    type: 'CHANGE_NAME', 
    name: 'movie3'
 }); 


// console.log('Name should be m1', store.getState());