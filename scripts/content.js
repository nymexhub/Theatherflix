// content.js
function insertExtensionUI() {

    if (!document.getElementById("theatherflix-extension")) {
      const extensionUI = document.createElement("div");
      extensionUI.id = "theatherflix-extension";

      extensionUI.innerHTML = "<p>Personalized recommendations will appear here.</p>";
      document.body.appendChild(extensionUI);
    }
  }
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message === "showExtensionUI") {
      insertExtensionUI();
    }
  });
  
  chrome.runtime.sendMessage("contentScriptReady");
  