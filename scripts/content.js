// content.js
function insertExtensionUI() {
    // Check if the extension UI is already inserted to avoid duplication
    if (!document.getElementById("theatherflix-extension")) {
      const extensionUI = document.createElement("div");
      extensionUI.id = "theatherflix-extension";
      // Insert your UI elements here (e.g., personalized recommendations, stars, etc.)
      // For this example, we'll just add a simple text.
      extensionUI.innerHTML = "<p>Personalized recommendations will appear here.</p>";
      document.body.appendChild(extensionUI);
    }
  }
  
  // Listen for messages from the extension popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "showExtensionUI") {
      insertExtensionUI();
    }
  });
  
  // Inform the extension popup that the content script is ready
  chrome.runtime.sendMessage("contentScriptReady");
  