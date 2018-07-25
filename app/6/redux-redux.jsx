import redux from ('redux');

console.log('Starting redux');

let reducer = (state = {
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
let store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
let unsubscribe = store.subscribe(() => {
  let state = store.getState();

  // console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

let currentState = store.getState();
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

let CHANGE_NAME = document.getElementById('app')
function renderer(state, dispatch) {
  ReactDOM.render(
    <Application state={state} dispatch={dispatch} />,
    CHANGE_NAME
  )
}

let element = document.getElementById(id);
element.dispatchEvent(new Event("change"));

