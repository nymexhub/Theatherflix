var redux = require('redux');

// starting up redux 
console.log('Starting up redux');


// °|°°°°°°°°°°°°°°|||||°°°|°°° tryting to gget this project done :P 

var stateDefault = {
  searchText: '',
  showCompleted: false, 
  movies: []

};



// |°°|°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||||||| 
// trying to get this thing done


var reducer = (state = stateDefault, action) => {
            return state; 
}; 

var store = redux.createStore(reducer);

// var currentState = store.getState();
console.log('currentState', store.getState());

