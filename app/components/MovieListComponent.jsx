var React = require('react');

var MovieListComponent = React.createClass({
    render() {
        const {topMovies} = this.props;
        const movies = movieHelpers.getMoviesList(topMovies.response);
    
        return (
          <div>
            <AppBar title='Movie Browser' />
            <Grid>
              <Row>
                <p>Search will go here</p>
              </Row>
              <Row>
                <MovieList movies={movies} isLoading={topMovies.isLoading} />
              </Row>
            </Grid>
          </div>
        );
      }
});


 


module.exports = MovieListComponent;



