var redux = require('redux');

// starting up redux 
console.log('Starting up redux');


// °|°°°°°°°°°°°°°°|||||°°°|°°° tryting to gget this shit done :P 

var stateDefault = {
  searchText: '',
  showCompleted: false, 
  movies: []

};



// |°°|°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||||||| 
// trying to get this thing donde with the most powerful attemp in the loeader. 


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

// var currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT', 
    searchText: 'y'
});

console.log('searchText should be "y"', store.getState());