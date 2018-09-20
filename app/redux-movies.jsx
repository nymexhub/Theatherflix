/***********************
 * Module dependencies *
 ***********************/
// import redux from ('redux');
// export default MovieListComponent;
const redux = require('redux');
const axios = require('axios');

console.log('This is redux');

const actions = require('./actions/index.jsx');
const store = require('./store/configureStore.jsx').configure();

// Subscribe to changes
const unsubscribe = store.subscribe(() => {
  const state = store.getState();

  console.log('New state', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';

      const MovieListComponent = ({movies, isLoading}) => {
        const movieColumns = movies ? movies.map(movie => (
          <Col style={styles.movieColumn} key={movie.id} xs={12} sm={4} md={3} lg={3}>
            <MovieCard movie={movie} />
          </Col>
      )) : null;
      
      return (
        <Row>
          {movieColumns}
          <LoaderComponent isLoading={isLoading} />
        </Row>
      );
    }
    
  } else if (state.map.url) {
   //  document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
    document.getElementById('welcome').innerHTML = '<hr>'; 
    

    
  }
});
// unsubscribe();





var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Phil'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Start Wars', 'Action'));
store.dispatch(actions.removeMovie(1));
