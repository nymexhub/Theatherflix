/***********************
 * Module dependencies *
 ***********************/
import redux from ('redux');

console.log('Starting up redux');

// testing stuff
  

  var nextNmovieId = 1;
  var nextMovieId = 1;

  

  var OldReducer = (state = stateDefault, action) => {
    // state = state || {name: 'Anonymous'};
  
    switch (action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.name
        };
      case 'ADD_NMOVIE':
        return {
          ...state,
          nmovie: [
            ...state.nmovie,
            {
              id: nextNmovieId++,
              nmovie: action.nmovie
            }
          ]
        };
      case 'REMOVE_NMOVIE':
          return {
              ...state,
              nmovie: state.nmovie.filter((nmovie) => nmovie.id !== action.id)
          }
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              id: nextMovieId++,
              title: action.title,
              genre: action.genre
            }
          ]
        }
      default:
        return state;
    }
  };





var nameReducer = (state = 'Anonymous', action) => {
   switch (action.type) {
     case 'CHANGE_NAME': 
       return action.name
     default:
        return state;
   }; 
}; 

var newMovies = (state = [], action) => {
   switch (action.type) {
     case 'ADD_newMovies':

   }
}; 

var reducer = redux.combineReducers({
    name: nameReducer,
    newMovies: newMoviesReducer 

})


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





var unsuscribe =  store.subscribe(() => {
              var state = store.getState(); 
              console.log('Movie is', state.name); 
              document.getElementById('welcome').innerHTML = "Welcome to theatherflix we're moving forward. !"; 
              document.getElementById('app').innerHTML = state.name; 
}); 

// unsuscribe();

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'W'
  });
  
  store.dispatch({
    type: 'ADD_NMOVIE',
    nmovie: 'Running'
  });

  store.dispatch({
    type: 'ADD_NMOVIE',
    nmovie: 'waiting'
  });
  
  store.dispatch({
    type: 'REMOVE_NMOVIE',
    id: 2
  });

  store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Y'
  });
  
  store.dispatch({
    type: 'ADD_MOVIE',
    title: 'American history X',
    genre: 'Action'
  });
  

console.log('We get: ', store.getState());
