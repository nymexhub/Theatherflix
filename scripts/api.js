// scripts/api.js
const recommendationsContainer = document.getElementById('recommendations');

// Function to fetch recommendations from the TMDB API using the user's API key
async function fetchRecommendations(apiKey) {
  try {
    // Fetch recommendations data from the TMDB API using the user's API key
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: apiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page: 1,
      },
    });

    const recommendationsData = response.data.results;
    // Process the data and display recommendations in the popup
    displayRecommendations(recommendationsData);
  } catch (error) {
    console.error('Error fetching recommendations:', error);
  }
}

// Function to display the recommendations in the popup
function displayRecommendations(recommendationsData) {
  recommendationsContainer.innerHTML = '';

  recommendationsData.forEach((recommendation) => {
    const { title, poster_path, vote_average } = recommendation;
    const poster = `https://image.tmdb.org/t/p/w200${poster_path}`;
    const rating = vote_average.toFixed(1);

    const recommendationElement = document.createElement('div');
    recommendationElement.classList.add('recommendation');
    recommendationElement.innerHTML = `
      <img src="${poster}" alt="${title}">
      <h3>${title}</h3>
      <p>Rating: ${rating}/10</p>
      <hr>
    `;

    recommendationsContainer.appendChild(recommendationElement);
  });
}

// Fetch the user's API key from local storage
chrome.storage.local.get(['apiKey'], (result) => {
  const apiKey = result.apiKey;
  if (apiKey) {
    fetchRecommendations(apiKey);
  } else {
    // Display a message to prompt the user to enter their API key
    console.log('Please enter your API key.');
  }
});
