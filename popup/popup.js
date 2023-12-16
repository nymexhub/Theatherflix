/*
#####################################
-------------------------------------
Developed by Felipe Alfonso González
Computer Science Engineer
f.alfonso@res-ear.ch
github.com/felipealfonsog
Santiago, Chile
-------------------------------------
MIT Licence
#####################################
*/


document.addEventListener("DOMContentLoaded", () => {
  const saveButton = document.getElementById("save-button");
  const apiKeyInput = document.getElementById("api-key");
  const statusMessage = document.getElementById("status-message");
  const loadMoreButton = document.getElementById("load-more-button");
  const recommendationsList = document.getElementById("recommendations-list");
  const configSection = document.getElementById("config-section");
  const refreshButton = document.getElementById("refresh-button");

  const searchInput = document.getElementById("search-input");
  let searchTimeout;

  const apiKeyMessage = document.createElement("p");
  apiKeyMessage.className = "api-key-message";
  apiKeyMessage.textContent =
    "Please configure your API Key before using the search functionality.";
  searchInput.parentNode.insertBefore(apiKeyMessage, searchInput.nextSibling);

  apiKeyMessage.style.display = "none";

  let apiKey = "";
  let page = 1;
  const moviesPerPage = 20;
  let movieRecommendations = [];
  let searchResults = [];

  const defaultMoviesPerPage = 20;
  let currentMoviesPerPage = defaultMoviesPerPage;

  let searchActive = false;

  function toggleApiKeyMessage(show) {
    apiKeyMessage.style.display = show ? "block" : "none";
  }

  function toggleLoadMoreButton() {
    if (apiKey && apiKey.trim() !== "") {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  }

  searchInput.addEventListener("input", async () => {
    clearTimeout(searchTimeout);
    const searchTerm = searchInput.value.toLowerCase();

    if (!apiKey && searchTerm !== "") {
      apiKeyMessage.style.display = "block";
    } else {
      apiKeyMessage.style.display = "none";
    }

    searchTimeout = setTimeout(async () => {
      if (searchTerm === "") {
        currentMoviesPerPage = defaultMoviesPerPage;
        renderMovieRecommendations();
        loadMoreButton.style.display = "block";
        toggleApiKeyMessage(false);
        toggleLoadMoreButton();
      } else {
        if (!apiKey) {
          toggleApiKeyMessage(true);
          return;
        }
        try {
          searchResults = await fetchSearchResults(searchTerm);
          renderSearchResults(searchResults);
          loadMoreButton.style.display = "none";

          toggleApiKeyMessage(false);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      }
    }, 500);
  });

  const accordionHeader = document.querySelector(".accordion-header");
  configSection.classList.add("inactive");
  accordionHeader.addEventListener("click", () => {
    configSection.classList.toggle("active");
    configSection.classList.toggle("inactive");
  });

  apiKeyInput.addEventListener("input", (event) => {
    apiKey = event.target.value.trim();
    validateApiKey(apiKey);
  });

  saveButton.addEventListener("click", () => {
    if (!apiKey) {
      statusMessage.textContent = "Please enter a valid API Key.";
      return;
    }

    if (!isValidApiKey(apiKey)) {
      statusMessage.textContent =
        "Please enter a valid API Key (letters and numbers only, no spaces).";
      return;
    }

    localStorage.setItem("tmdb_api_key", apiKey);
    statusMessage.textContent = "API Key saved successfully!";
    configSection.classList.add("inactive");
    refreshRecommendations();
  });

  loadMoreButton.addEventListener("click", () => {
    loadMoreRecommendations();
  });

  refreshButton.addEventListener("click", () => {
    refreshRecommendations();
  });

  async function fetchSearchResults(searchTerm) {
    if (!apiKey) {
      throw new Error("API Key is required to fetch search results.");
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`
      );
      return response.data.results;
    } catch (error) {
      console.error("Error fetching search results:", error);
      throw error;
    }
  }
/*
  function renderSearchResults(results) {
    recommendationsList.innerHTML = "";

    results.forEach((movie) => {
      const movieBox = document.createElement("div");
      movieBox.className = "movie-box";

      const moviePoster = document.createElement("img");
      moviePoster.className = "movie-poster";
      moviePoster.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
      movieBox.appendChild(moviePoster);

      const movieInfo = document.createElement("div");
      movieInfo.className = "movie-info";

      const movieTitle = document.createElement("h2");
      movieTitle.textContent = movie.title;
      movieInfo.appendChild(movieTitle);

      const movieOverview = document.createElement("p");
      movieOverview.textContent = movie.overview;
      movieInfo.appendChild(movieOverview);

      if (movie.streamingInfo && movie.streamingInfo.length > 0) {
        const streamingInfo = document.createElement("p");
        const services = movie.streamingInfo.join(", ");
        streamingInfo.innerHTML = `<b>Available on:</b> ${services}`;
        movieInfo.appendChild(streamingInfo);
      } else {
        const noStreamingInfo = document.createElement("p");
        noStreamingInfo.textContent =
          "Not available on any streaming service at the moment. Check local cinemas for availability.";
        noStreamingInfo.style.fontWeight = "bold";
        movieInfo.appendChild(noStreamingInfo);
      }

      movieBox.appendChild(movieInfo);
      recommendationsList.appendChild(movieBox);
    });
  }
*/

function renderSearchResults(results) {
  recommendationsList.innerHTML = "";

  results.forEach((movie) => {
    const movieBox = document.createElement("div");
    movieBox.className = "movie-box";

    const moviePoster = document.createElement("img");
    moviePoster.className = "movie-poster";
    moviePoster.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    movieBox.appendChild(moviePoster);

    const movieInfo = document.createElement("div");
    movieInfo.className = "movie-info";

    // Create a link element for the movie title
    const movieTitle = document.createElement("h3");
    const titleLink = document.createElement("a");
    titleLink.textContent = movie.title;
    titleLink.href = `https://www.themoviedb.org/movie/${movie.id}`;
    titleLink.target = "_blank"; // Open link in a new tab
    movieTitle.appendChild(titleLink);
    movieInfo.appendChild(movieTitle);

    const movieOverview = document.createElement("p");
    movieOverview.textContent = movie.overview;
    movieInfo.appendChild(movieOverview);

    if (movie.streamingInfo && movie.streamingInfo.length > 0) {
      const streamingInfo = document.createElement("p");
      const services = movie.streamingInfo.join(", ");
      streamingInfo.innerHTML = `<b>Available on:</b> ${services}`;
      movieInfo.appendChild(streamingInfo);
    } else {
      const noStreamingInfo = document.createElement("p");
      noStreamingInfo.textContent =
        "Not available on any streaming service at the moment. Check local cinemas for availability.";
      noStreamingInfo.style.fontWeight = "bold";
      movieInfo.appendChild(noStreamingInfo);
    }

    movieBox.appendChild(movieInfo);
    recommendationsList.appendChild(movieBox);
  });
}



  async function refreshRecommendations() {
    if (!apiKey) {
      statusMessage.textContent =
        "Please enter a valid API Key before refreshing recommendations.";
      return;
    }

    page = 1;
    try {
      const recommendations = await fetchMovieRecommendations();
      movieRecommendations = recommendations;
      renderMovieRecommendations();

      loadMoreButton.style.display = "block"; // Muestra el botón Load More
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
      statusMessage.textContent =
        "Error fetching movie recommendations. Please try again later.";
    }
  }

  async function loadMoreRecommendations() {
    page++;
    try {
      const recommendations = await fetchMovieRecommendations();
      movieRecommendations.push(...recommendations);
      renderMovieRecommendations();

      if (searchActive) {
        loadMoreButton.style.display = "none";
      } else {
        loadMoreButton.style.display = "block";
      }
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
      statusMessage.textContent =
        "Error fetching movie recommendations. Please try again later.";
    }
  }

  async function loadMoreSearchResults() {
    page++;
    try {
      const additionalResults = await fetchSearchResults(
        searchInput.value.toLowerCase(),
        page
      );

      if (additionalResults.length > 0) {
        searchResults.push(...additionalResults);
        renderSearchResults(searchResults);

        if (additionalResults.length < moviesPerPage) {
          loadMoreButton.style.display = "none";
        } else {
          loadMoreButton.style.display = "block";
        }
      } else {
        loadMoreButton.style.display = "none";
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }

  async function fetchMovieRecommendations() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`
      );
      const movies = response.data.results;
      const moviePromises = movies.map(async (movie) => {
        const streamingInfo = await fetchStreamingInfo(apiKey, movie.id);
        movie.streamingInfo = streamingInfo;
        return movie;
      });

      const moviesWithStreamingInfo = await Promise.all(moviePromises);
      return moviesWithStreamingInfo;
    } catch (error) {
      console.error("Error fetching movie recommendations:", error);
      throw error;
    }
  }

  async function fetchStreamingInfo(apiKey, movieId) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${apiKey}`
      );
      const results = response.data.results;
      const streamingServices = new Set();

      for (const country in results) {
        if (results[country].flatrate) {
          const countryStreamingServices = results[country].flatrate.map(
            (service) => service.provider_name
          );
          countryStreamingServices.forEach((service) =>
            streamingServices.add(service)
          );
        }
      }

      return Array.from(streamingServices);
    } catch (error) {
      console.error("Error fetching streaming information:", error);
      return [];
    }
  }
/*
  function renderMovieRecommendations(results = movieRecommendations) {
    const startIndex = (page - 1) * moviesPerPage;
    const endIndex = startIndex + moviesPerPage;
    const visibleRecommendations = movieRecommendations.slice(0, endIndex);

    recommendationsList.innerHTML = "";

    results.forEach((movie) => {
      const movieBox = document.createElement("div");
      movieBox.className = "movie-box";

      const moviePoster = document.createElement("img");
      moviePoster.className = "movie-poster";
      moviePoster.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
      movieBox.appendChild(moviePoster);

      const movieInfo = document.createElement("div");
      movieInfo.className = "movie-info";

      const movieTitle = document.createElement("h2");
      movieTitle.textContent = movie.title;
      movieInfo.appendChild(movieTitle);

      const movieOverview = document.createElement("p");
      movieOverview.textContent = movie.overview;
      movieInfo.appendChild(movieOverview);

      if (movie.streamingInfo && movie.streamingInfo.length > 0) {
        const streamingInfo = document.createElement("p");
        const services = movie.streamingInfo.join(", ");
        streamingInfo.innerHTML = `<b>Available on:</b> ${services}`;
        movieInfo.appendChild(streamingInfo);
      } else {
        const noStreamingInfo = document.createElement("p");
        noStreamingInfo.textContent =
          "Not available on any streaming service at the moment. Check local cinemas for availability.";
        noStreamingInfo.style.fontWeight = "bold";
        movieInfo.appendChild(noStreamingInfo);
      }

      movieBox.appendChild(movieInfo);
      recommendationsList.appendChild(movieBox);
    });

    if (endIndex >= results.length) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "block";
    }

    toggleLoadMoreButton();
  }
*/
function renderMovieRecommendations(results = movieRecommendations) {
  const startIndex = (page - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const visibleRecommendations = movieRecommendations.slice(0, endIndex);

  recommendationsList.innerHTML = "";

  results.forEach((movie) => {
    const movieBox = document.createElement("div");
    movieBox.className = "movie-box";

    const moviePoster = document.createElement("img");
    moviePoster.className = "movie-poster";
    moviePoster.src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
    movieBox.appendChild(moviePoster);

    const movieInfo = document.createElement("div");
    movieInfo.className = "movie-info";

    // Create a link element for the movie title
    const movieTitle = document.createElement("h3");
    const titleLink = document.createElement("a");
    titleLink.textContent = movie.title;
    titleLink.href = `https://www.themoviedb.org/movie/${movie.id}`;
    titleLink.target = "_blank"; // Open link in a new tab
    movieTitle.appendChild(titleLink);
    movieInfo.appendChild(movieTitle);

    const movieOverview = document.createElement("p");
    movieOverview.textContent = movie.overview;
    movieInfo.appendChild(movieOverview);

    if (movie.streamingInfo && movie.streamingInfo.length > 0) {
      const streamingInfo = document.createElement("p");
      const services = movie.streamingInfo.join(", ");
      streamingInfo.innerHTML = `<b>Available on:</b> ${services}`;
      movieInfo.appendChild(streamingInfo);
    } else {
      const noStreamingInfo = document.createElement("p");
      noStreamingInfo.textContent =
        "Not available on any streaming service at the moment. Check local cinemas for availability.";
      noStreamingInfo.style.fontWeight = "bold";
      movieInfo.appendChild(noStreamingInfo);
    }

    movieBox.appendChild(movieInfo);
    recommendationsList.appendChild(movieBox);
  });

  if (endIndex >= results.length) {
    loadMoreButton.style.display = "block";
  } else {
    loadMoreButton.style.display = "block";
  }

  toggleLoadMoreButton();
}


  function validateApiKey(apiKey) {
    const apiKeyRegex = /^[A-Za-z0-9]+$/;
    if (apiKeyRegex.test(apiKey)) {
      statusMessage.textContent = "";
      saveButton.disabled = false;
    } else {
      statusMessage.textContent =
        "Please enter a valid API Key (letters and numbers only, no spaces).";
      saveButton.disabled = true;
    }
  }

  function isValidApiKey(apiKey) {
    const apiKeyRegex = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/;
    return apiKeyRegex.test(apiKey);
  }

  const savedApiKey = localStorage.getItem("tmdb_api_key");
  if (savedApiKey) {
    apiKeyInput.value = savedApiKey;
    apiKey = savedApiKey;
    validateApiKey(apiKey);
    refreshRecommendations();
  }

  renderMovieRecommendations();
});
