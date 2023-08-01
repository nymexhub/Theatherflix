// api.js

// Function to fetch movie recommendations using the provided API key
async function fetchMovieRecommendations(apiKey) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie recommendations:', error);
    return [];
  }
}

// Function to render movie recommendations in the popup
function renderMovieRecommendations(recommendations) {
  const recommendationsList = document.getElementById('recommendations-list');

  recommendationsList.innerHTML = ''; // Clear previous recommendations

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

// Check if the API key is already saved in local storage
const apiKey = localStorage.getItem('tmdb_api_key');

// If the API key is already saved, fetch and render movie recommendations
if (apiKey) {
  fetchMovieRecommendations(apiKey)
    .then((recommendations) => renderMovieRecommendations(recommendations))
    .catch((error) => console.error('Error fetching movie recommendations:', error));
}
