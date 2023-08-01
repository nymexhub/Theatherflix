// Add a click event listener to toggle the configuration section
document.addEventListener('DOMContentLoaded', () => {
  const configButton = document.getElementById('config-button');
  const configSection = document.getElementById('config-section');

  configButton.addEventListener('click', () => {
    configSection.style.display = configSection.style.display === 'none' ? 'block' : 'none';
  });

  // Add a click event listener to save the API key
  const saveButton = document.getElementById('save-button');
  const apiKeyInput = document.getElementById('api-key');

  saveButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value;
    if (apiKey) {
      // Save the API key to local storage or wherever you need to store it
      // For simplicity, let's store it in local storage
      localStorage.setItem('tmdb_api_key', apiKey);
      // Optionally, you can display a success message to the user
      alert('API Key saved successfully!');
    } else {
      alert('Please enter a valid API Key.');
    }
  });
});
