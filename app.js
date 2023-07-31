// app.js

const recommendationsList = document.getElementById('recommendations-list');

// Fetch recommendations from the proxy server
fetch('http://localhost:3000/api/recommendations')
  .then(response => response.json())
  .then(data => {
    // Process the data and display the recommendations in the DOM
    data.results.forEach(recommendation => {
      const title = recommendation.title || recommendation.name;
      const poster = `https://image.tmdb.org/t/p/w200${recommendation.poster_path}`;

      const recommendationElement = document.createElement('div');
      recommendationElement.classList.add('recommendation');
      recommendationElement.innerHTML = `
        <img src="${poster}" alt="${title}">
        <p>${title}</p>
      `;

      recommendationsList.appendChild(recommendationElement);
    });
  })
  .catch(error => {
    console.error('Error fetching recommendations:', error);
  });
