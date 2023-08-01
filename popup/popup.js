
document.addEventListener('DOMContentLoaded', () => {
  const configButton = document.getElementById('config-button');
  const configSection = document.getElementById('config-section');

  configButton.addEventListener('click', () => {
    if (configSection.style.display === 'none') {
      configSection.style.display = 'block';
    } else {
      configSection.style.display = 'none';
    }
  });

  const saveButton = document.getElementById('save-button');
  const apiKeyInput = document.getElementById('api-key');

  saveButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value;
    if (apiKey) {
      localStorage.setItem('tmdb_api_key', apiKey);
      alert('API Key saved successfully!');
    } else {
      alert('Please enter a valid API Key.');
    }
  });
});
