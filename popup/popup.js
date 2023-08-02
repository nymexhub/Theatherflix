document.addEventListener('DOMContentLoaded', () => {
  const configButton = document.querySelector('.accordion-header');
  const configSection = document.getElementById('config-section');

  configButton.addEventListener('click', () => {
    configSection.classList.toggle('active');
  });

  const saveButton = document.getElementById('save-button');
  const apiKeyInput = document.getElementById('api-key');
  const statusMessage = document.getElementById('status-message');

  saveButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value;
    if (apiKey) {
      localStorage.setItem('tmdb_api_key', apiKey);
      statusMessage.textContent = 'API Key saved successfully!';
    } else {
      statusMessage.textContent = 'Please enter a valid API Key.';
    }
  });

  const refreshButton = document.getElementById('refresh-button');
  refreshButton.addEventListener('click', () => {
    const apiKey = localStorage.getItem('tmdb_api_key');
    if (apiKey) {
      fetchMovieRecommendations(apiKey)
        .then((recommendations) => renderMovieRecommendations(recommendations))
        .catch((error) => console.error('Error fetching movie recommendations:', error));
    } else {
      statusMessage.textContent = 'Please enter your API Key first.';
    }
  });

  const loadMoreButton = document.getElementById('load-more-button');
  let page = 1;
  const recommendationsPerPage = 5;

  loadMoreButton.addEventListener('click', () => {
    const apiKey = localStorage.getItem('tmdb_api_key');
    if (apiKey) {
      fetchMoreMovieRecommendations(apiKey, page)
        .then((additionalRecommendations) => {
          if (additionalRecommendations.length > 0) {
            renderMovieRecommendations(additionalRecommendations, true);
            page += 1;
          } else {
            statusMessage.textContent = 'No more recommendations to load.';
            loadMoreButton.style.display = 'none';
          }
        })
        .catch((error) => console.error('Error fetching more movie recommendations:', error));
    } else {
      statusMessage.textContent = 'Please enter your API Key first.';
    }
  });

  // Function to fetch movie recommendations
  async function fetchMovieRecommendations(apiKey) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
      return response.data.results.slice(0, recommendationsPerPage);
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
      return [];
    }
  }

  // Function to fetch more movie recommendations
  async function fetchMoreMovieRecommendations(apiKey, page) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page + 1}`
      );
      return response.data.results.slice(0, recommendationsPerPage);
    } catch (error) {
      console.error('Error fetching more movie recommendations:', error);
      return [];
    }
  }

  // Function to render movie recommendations
  function renderMovieRecommendations(recommendations, append = false) {
    const recommendationsList = document.getElementById('recommendations-list');

    if (!append) {
      recommendationsList.innerHTML = '';
    }

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

  // Initial load of movie recommendations
  const apiKey = localStorage.getItem('tmdb_api_key');
  if (apiKey) {
    fetchMovieRecommendations(apiKey)
      .then((recommendations) => renderMovieRecommendations(recommendations))
      .catch((error) => console.error('Error fetching movie recommendations:', error));
  } else {
    statusMessage.textContent = 'Please enter your API Key first.';
  }
});
