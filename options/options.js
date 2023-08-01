// options/options.js
const saveBtn = document.getElementById('saveBtn');
const apiKeyInput = document.getElementById('apiKey');

// Save the entered API key to local storage when the "Save" button is clicked
saveBtn.addEventListener('click', () => {
  const apiKey = apiKeyInput.value;
  if (apiKey) {
    chrome.storage.local.set({ apiKey }, () => {
      alert('API key saved successfully!');
    });
  } else {
    alert('Please enter your API key.');
  }
});
