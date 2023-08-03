document.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.getElementById('save-button');
  const apiKeyInput = document.getElementById('api-key');
  const statusMessage = document.getElementById('status-message');
  const loadMoreButton = document.getElementById('load-more-button');
  const recommendationsList = document.getElementById('recommendations-list');
  const configSection = document.getElementById('config-section');
  const refreshButton = document.getElementById('refresh-button');

  let apiKey = '';
  let page = 1;
  const moviesPerPage = 20;
  let movieRecommendations = [];


  const accordionHeader = document.querySelector('.accordion-header');
  accordionHeader.addEventListener('click', () => {
    configSection.classList.toggle('active');
  });

  apiKeyInput.addEventListener('input', (event) => {
    apiKey = event.target.value.trim();
    validateApiKey(apiKey);
  });

  saveButton.addEventListener('click', () => {
    if (!apiKey) {
      statusMessage.textContent = 'Please enter a valid API Key.';
      return;
    }

    if (!isValidApiKey(apiKey)) {
      statusMessage.textContent = 'Please enter a valid API Key (letters and numbers only, no spaces).';
      return;
    }

    localStorage.setItem('tmdb_api_key', apiKey);
    statusMessage.textContent = 'API Key saved successfully!';
    refreshRecommendations();
  });

  loadMoreButton.addEventListener('click', () => {
    loadMoreRecommendations();
  });

  refreshButton.addEventListener('click', () => {
    refreshRecommendations();
  });

  async function refreshRecommendations() {
    if (!apiKey) {
      statusMessage.textContent = 'Please enter a valid API Key before refreshing recommendations.';
      return;
    }

    page = 1; // Reset page number on refresh

    try {
      const recommendations = await fetchMovieRecommendations();
      movieRecommendations = recommendations;
      renderMovieRecommendations();
      loadMoreButton.style.display = 'block';
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
      statusMessage.textContent = 'Error fetching movie recommendations. Please try again later.';
    }
  }

  async function loadMoreRecommendations() {
    if (!apiKey) {
      statusMessage.textContent = 'Please enter a valid API Key before loading more recommendations.';
      return;
    }

    page++;
    try {
      const recommendations = await fetchMovieRecommendations();
      movieRecommendations.push(...recommendations);
      renderMovieRecommendations();
      loadMoreButton.style.display = 'block';
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
      statusMessage.textContent = 'Error fetching movie recommendations. Please try again later.';
    }
  }

  async function fetchMovieRecommendations() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`);
      const movies = response.data.results;
      const moviePromises = movies.map(async (movie) => {
        const streamingInfo = await fetchStreamingInfo(apiKey, movie.id);
        movie.streamingInfo = streamingInfo;
        return movie;
      });

      const moviesWithStreamingInfo = await Promise.all(moviePromises);
      return moviesWithStreamingInfo;
    } catch (error) {
      console.error('Error fetching movie recommendations:', error);
      throw error;
    }
  }

  async function fetchStreamingInfo(apiKey, movieId) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}`);
      const results = response.data.results;
      const streamingServices = new Set();

      // Collect streaming information from all countries without duplicates
      for (const country in results) {
        if (results[country].flatrate) {
          const countryStreamingServices = results[country].flatrate.map(service => service.provider_name);
          countryStreamingServices.forEach(service => streamingServices.add(service));
        }
      }

      return Array.from(streamingServices);
    } catch (error) {
      console.error('Error fetching streaming information:', error);
      return [];
    }
  }

  function renderMovieRecommendations() {
    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const visibleRecommendations = movieRecommendations.slice(0, endIndex);

    recommendationsList.innerHTML = '';

    visibleRecommendations.forEach((movie) => {
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
        const services = movie.streamingInfo.join(', ');
        streamingInfo.innerHTML = `<b>Available on:</b> ${services}`;
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

    if (endIndex >= movieRecommendations.length) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'block';
    }
  }

  function validateApiKey(apiKey) {
    const apiKeyRegex = /^[A-Za-z0-9]+$/;
    if (apiKeyRegex.test(apiKey)) {
      statusMessage.textContent = '';
      saveButton.disabled = false;
    } else {
      statusMessage.textContent = 'Please enter a valid API Key (letters and numbers only, no spaces).';
      saveButton.disabled = true;
    }
  }

  function isValidApiKey(apiKey) {
    const apiKeyRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/;
    return apiKeyRegex.test(apiKey);
  }

  // Cargar API Key si existe en el almacenamiento local
  const savedApiKey = localStorage.getItem('tmdb_api_key');
  if (savedApiKey) {
    apiKeyInput.value = savedApiKey;
    apiKey = savedApiKey;
    validateApiKey(apiKey);
    refreshRecommendations();
  }
});
