var redux = require('redux');

// starting up redux 
console.log('Starting up redux');

/* 
Please if you code in this file please or another,  also add your email & name and date among the comments before and after any code we could write.
Thanks a lot!
Felipe - felipe@nodeio.us  - 13-04-2018
----------

*/ 

// °|°°°°°°°°°°°°°°|||||°°°|°°° tryting to gget this project done :P 

var stateDefault = {
  searchText: '',
  showCompleted: false, 
  movies: []

};

// all this is for testing purposes before to make a big time change in the code , I mean front end-back end. 

// |°°|°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°||||||| 
// trying to get this thing done


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
    searchText: 'm1'
});

console.log('searchText should be "m1"', store.getState());
