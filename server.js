// server.js
const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;
const tmdbApiKey = '3e2c775c76e6267da90ff335362a48cd'; // TMDb API key here

// Route to get personalized movie and series recommendations
app.get('/api/recommendations', async (req, res) => {
  try {
 
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, {
      params: {
        api_key: tmdbApiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page: 1,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recommendations:', error.message);
    res.status(500).json({ error: 'Error fetching recommendations' });
  }
});

app.listen(port, () => {
  console.log(`Proxy server started at http://localhost:${port}`);
});
