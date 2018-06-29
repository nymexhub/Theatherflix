var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {
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
  type: 'CHANGE_NAME',
  name: 'Movies Category #1'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Movies Category #2'
});

store.getState().movies.map(({ type, name}) => {
  insertShopDOM(movieElem, type, name)
  return null;
})


function insertMovieDOM(movieElem, type, name) {
  movieElem.innerHTML += `
  <div data-type=${type} class="box item">
 
      <div class="meta">
         <h2>${name}</h2> 
 
      </div>
  </div>`
}