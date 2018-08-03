const redux = require('redux');

console.log('Starting redux');

const reducer = (state = {
  id: 'Anonymous'
}, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {

      case 'CHANGE_MOVIE':
      return {
        // ...state,
        name: action.name,
        movie_url: action.movie_url
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
  //document.getElementById('app').innerHTML = state.id;




  document.getElementById('app_video').innerHTML = state.name;
  document.getElementById('app_video').innerHTML = state.movie_url;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
  id: 1,
  type: 'CHANGE_MOVIE',
  name: 'American history x',
  movie_url: '<iframe width="1778" height="711" src="https://www.youtube.com/embed/XfQYHqsiN5g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
});
store.dispatch({
  id: 2,
  type: 'CHANGE_MOVIE',
  name: 'The Buddha',
  movie_url: '<iframe width="1778" height="711" src="https://www.youtube.com/embed/9I5RaJh1yPs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
});
store.dispatch({
  id: 3,
  type: 'CHANGE_MOVIE',
  name: 'The minimalist',
  movie_url: '<iframe width="1778" height="711" src="https://www.youtube.com/embed/0Co1Iptd4p4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
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

