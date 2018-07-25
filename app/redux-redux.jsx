const redux = require('redux');

console.log('Starting redux');

const reducer = (state = {
  name: 'Anonymous'
}, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        // ...state,
        name: action.name
      };
    default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  // console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  id: 1,
  type: 'CHANGE_NAME',
  name: 'Movies Category #1'
});

store.dispatch({
  id: 2,
  type: 'CHANGE_NAME',
  name: 'Movies Category #2'
});
store.dispatch({
  id: 3,
  type: 'CHANGE_NAME',
  name: 'Movies Category #3'
});
store.dispatch({
  id: 4,
  type: 'CHANGE_NAME',
  name: 'Movies Category #4'
});
store.dispatch({
  id: 5,
  type: 'CHANGE_NAME',
  name: 'Movies Category #5'
});
store.dispatch({
  id: 6,
  type: 'CHANGE_NAME',
  name: 'Movies Category #6'
});

// store.getState().movies.map(({ type, name}) => {
//   insertMovieDOM(movieElem, type, name)
//   return null;
// })


// function insertMovieDOM(movieElem, type, name) {
//   movieElem.innerHTML += `
//   <div data-type=${type} class="box item">
 
//       <div class="meta">
//          <h2>${name}</h2> 
 
//       </div>
//   </div>`
// }

