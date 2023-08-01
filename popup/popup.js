// popup.js

$(document).ready(function() {
  // Add a click event listener to toggle the configuration section
  $('#config-button').click(function() {
    $('#config-section').slideToggle();
  });

  // Add a click event listener to save the API key
  $('#save-button').click(function() {
    const apiKey = $('#api-key').val();
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
