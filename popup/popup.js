// popup/popup.js

document.addEventListener('DOMContentLoaded', () => {
  const configButton = document.querySelector('.accordion-header');
  const configSection = document.getElementById('config-section');

  configButton.addEventListener('click', () => {
    configSection.classList.toggle('active');
  });


  const saveButton = document.getElementById('save-button');
  const apiKeyInput = document.getElementById('api-key');
  const statusMessage = document.getElementById('status-message');

  saveButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value;
    if (apiKey) {

      localStorage.setItem('tmdb_api_key', apiKey);
 
      statusMessage.textContent = 'API Key saved successfully!';
    } else {
      statusMessage.textContent = 'Please enter a valid API Key.';
    }
  });
});
