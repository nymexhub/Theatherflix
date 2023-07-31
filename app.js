// app.js
// Aquí se implementará la lógica para obtener las recomendaciones y mostrarlas en el DOM.

const recommendationsList = document.getElementById('recommendations-list');

// Obtener recomendaciones desde el servidor de proxy
fetch('http://localhost:3000/api/recommendations')
  .then(response => response.json())
  .then(data => {
    // Procesar los datos y mostrar las recomendaciones en el DOM
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
    console.error('Error al obtener las recomendaciones:', error);
  });
