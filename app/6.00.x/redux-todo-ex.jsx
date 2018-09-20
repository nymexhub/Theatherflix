/***********************
 * Module dependencies *
 ***********************/
import redux from ('redux');

console.log('Starting todo redux example');

// testing stuff

let stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};
let reducer = (state = stateDefault, action) => {
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
let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
store.subscribe(() => {
  let state = store.getState();

  document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'dog'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Something else'
});
