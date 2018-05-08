import redux from ('redux');

// starting up redux 
console.log('Starting up redux');

/* 
Please if you code in this file please or another,  also add your email & name and date among the comments before and after any code we could write.
Thanks a lot!
Felipe - felipe.dev.engr.js@gmail.com   - 13-04-2018
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

// var store = redux.createStore(reducer);

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

// subscribe to changes 
store.subscribe(() => {
    var state = store.getState();

    document.getElementById('welcome').innerHTML = "Welcome to theatherflix we're moving forward!"; 
    document.getElementById('app').innerHTML = state.searchText; 
});




// var currentState = store.getState();
console.log('currentState', store.getState());

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT', 
    searchText: 'm1'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT', 
    searchText: 'm2'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT', 
    searchText: 'm3'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT', 
    searchText: 'm4'
});

console.log('searchText should be "m1"', store.getState());
