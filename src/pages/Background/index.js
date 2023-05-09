console.log('This is the background page.');
console.log('Put the background scripts here.');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Opening the Popup Panel...');
  // Check if the message is to open the Popup Panel
  if (message.action === 'open-popup-panel') {
    // Set the URL of the Popup Panel
    chrome.action.setPopup({ popup: 'popup.html' });
  }
});

