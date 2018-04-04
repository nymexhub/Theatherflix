var redux = require('redux');

// starting up redux 
console.log('Starting up redux');
// we're gonna start to build the next stage with redux to load the movies. :=)

// This code and many other code is part of the process that I'm taking to the project of having something cool with redux...
// kinda creaating in my head while I'm coding here part of its algorithm .... 

// °|°|°|°|°|°|°


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

    return state; 

}; 


var store = redux.createStore(reducer);

// A little testing here 
store.subscribe(() => {
    var state = store.getState();

    console.log('Name is', state.name); 
}); 


var currentState = store.getState();
console.log('currentState', currentState);




store.dispatch( {
   type: 'CHANGE_NAME', 
   name: 'y'
}); 

store.dispatch( {
   type: 'CHANGE_NAME', 
   name: 'w'
}); 

console.log('Name should be y', store.getState());