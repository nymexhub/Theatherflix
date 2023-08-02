// api.js

async function fetchMovieRecommendations(apiKey, page = 1) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie recommendations:', error);
    return [];
  }
}

function renderMovieRecommendations(recommendations) {
  const recommendationsList = document.getElementById('recommendations-list');

  recommendationsList.innerHTML = '';

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

    movieBox.appendChild(movieInfo);
    recommendationsList.appendChild(movieBox);
  });
}

const apiKey = localStorage.getItem('tmdb_api_key');

if (apiKey) {
  fetchMovieRecommendations(apiKey)
    .then((recommendations) => renderMovieRecommendations(recommendations))
    .catch((error) => console.error('Error fetching movie recommendations:', error));
}
