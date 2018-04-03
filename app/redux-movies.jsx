var redux = require('redux');

// starting up redux 
console.log('Starting up redux');


// This code and many other code is part of the process that I'm taking to the project of having something cool with redux...
// kinda creaating in my head while I'm coding here part of its algorithm .... 

// °|°|°|°|°|°|°



var stateDefault = {
  searchText: '',
  showCompleted: false, 
  movies: []

};

var reducer = (state = stateDefault, action) => {
   
     switch (action.type) {
         case 'CHANGE_SEARCH_TEXT':
         return {
             ...state,
             searchText: action.searchText
         };
         default:
         return state;
     }

}; 


var store = redux.createStore(reducer);


// suscribe to changes 
store.subscribe(() => {
    var state = store.getState();
}); 



// var currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT', 
    searchText: 'Theather'
});

console.log('searchText should be "Theather"', store.getState());