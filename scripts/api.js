async function fetchMovieRecommendations(apiKey, page) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`);
    const movieRecommendations = response.data.results;

    // For each movie recommendation, fetch the streaming information using TMDb API
    const moviePromises = movieRecommendations.map(async (movie) => {
      const streamingInfo = await fetchStreamingInfo(apiKey, movie.id);
      movie.streamingInfo = streamingInfo;
      return movie;
    });

    const moviesWithStreamingInfo = await Promise.all(moviePromises);
    return moviesWithStreamingInfo;
  } catch (error) {
    console.error('Error fetching movie recommendations:', error);
    return [];
  }
}

async function fetchStreamingInfo(apiKey, movieId) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}`);
    const results = response.data.results;
    const streamingServices = results["US"] ? results["US"].flatrate.map(service => service.provider_name) : [];
    return streamingServices;
  } catch (error) {
    console.error('Error fetching streaming information:', error);
    return [];
  }
}

function renderMovieRecommendations(recommendations) {
  const recommendationsList = document.getElementById('recommendations-list');
  recommendationsList.innerHTML = ''; // Clear previous content

  recommendations.forEach((movie) => {
    const movieBox = document.createElement('div');
    movieBox.className = 'movie-box';

    const moviePoster = document.createElement('img');
    moviePoster.className = 'movie-poster';
    moviePoster.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    movieBox.appendChild(moviePoster);

    const movieInfo = document.createElement('div');
    movieInfo.className = 'movie-info';

    const movieTitle = document.createElement('h2');
    movieTitle.textContent = movie.title;
    movieInfo.appendChild(movieTitle);

    const movieOverview = document.createElement('p');
    movieOverview.textContent = movie.overview;
    movieInfo.appendChild(movieOverview);

    if (movie.streamingInfo && movie.streamingInfo.length > 0) {
      const streamingInfo = document.createElement('p');
      streamingInfo.innerHTML = '<b>Streaming on:</b> ' + movie.streamingInfo.join(', ');
      movieInfo.appendChild(streamingInfo);
    } else {
      const noStreamingInfo = document.createElement('p');
      noStreamingInfo.textContent = 'Not available on any streaming service at the moment. Check local cinemas for availability.';
      noStreamingInfo.style.fontWeight = 'bold'; // Make the message bold
      movieInfo.appendChild(noStreamingInfo);
    }

    movieBox.appendChild(movieInfo);
    recommendationsList.appendChild(movieBox);
  });
}
