// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Elige el puerto que prefieras para el servidor
const tmdbApiKey = '3e2c775c76e6267da90ff335362a48cd'; // Coloca aquí la clave de API de TMDb

// Ruta para obtener recomendaciones personalizadas de películas y series
app.get('/api/recommendations', async (req, res) => {
  try {
    // Hacer la solicitud a la API de TMDb para obtener las recomendaciones
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: tmdbApiKey,
        language: 'es-ES',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page: 1,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener las recomendaciones:', error.message);
    res.status(500).json({ error: 'Error al obtener las recomendaciones' });
  }
});

app.listen(port, () => {
  console.log(`Servidor de proxy iniciado en http://localhost:${port}`);
});
