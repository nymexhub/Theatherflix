var redux = require('redux');

// starting up redux 
console.log('Starting up redux');

/*
°|°|°|°|°|°|°

UNDER DEVELOPMENT !!!!!!!!!!!!!!!!!

this is all for testing purposes !
Well the final final that we have to focus on , 
it's actually totally diffferent, it's not this. It's 'redux-movies-jsx'
we have to work in the file!
*/

/* 

Let's try to create an algorithm from  this file
 */


/* 
Please if you code in this file please or another,  also add your email & 
name and date among the comments before and after any code we could write.
Thanks a lot!
Felipe - felipe@nodeio.us  - 13-04-2018
----------

*/ 


/* 
I'm going to create separete files for a better way to understand it and a better logical.... 
now all this is for testing purposes and checking things, organizing stuff on my head and
 basically to put an algorithm on my head while I'm writing code here with redux.
*/

// I'm preparing the projet to move all into logical files .... pleaes any change report it here as a comment pleae. :)

var stateDefault = {
    name: 'Anonymous',
    nmovie: [],
    movies: []
  };

  var nextNmovieId = 1;
  var nextMovieId = 1;

  var reducer = (state = stateDefault, action) => {
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
