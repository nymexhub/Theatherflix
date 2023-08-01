// popup/popup.js

// Add a click event listener to toggle the configuration section
document.addEventListener('DOMContentLoaded', () => {
  const configButton = document.querySelector('.accordion-header');
  const configSection = document.getElementById('config-section');

  configButton.addEventListener('click', () => {
    configSection.classList.toggle('active');
  });

  // Add a click event listener to save the API key
  const saveButton = document.getElementById('save-button');
  const apiKeyInput = document.getElementById('api-key');
  const statusMessage = document.getElementById('status-message');

  saveButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value;
    if (apiKey) {
      // Save the API key to local storage
      localStorage.setItem('tmdb_api_key', apiKey);
      // Display a success message to the user
      statusMessage.textContent = 'API Key saved successfully!';
    } else {
      statusMessage.textContent = 'Please enter a valid API Key.';
    }
  });
});
