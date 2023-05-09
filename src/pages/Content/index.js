console.log('Content script works!');

// Function to check if the compose box is visible
function isComposeBoxVisible() {
  // .bAK is the class name of the tool bar in the compose box
  const composeBox = document.querySelector('.bAK');
  return composeBox && window.getComputedStyle(composeBox).display !== 'none';
}

// Function to handle when the compose box is visible
function onComposeBoxVisible() {
  // Do something when the compose box appears
  console.log('Compose box is visible!');
  let icon = createIcon();
  console.log(icon);
  // Add an event listener to the icon element
  icon.addEventListener('click', onIconClick);
}

// Function to create and append the icon element
function createIcon() {
  console.log('Creating icon...');
  const icon = document.createElement('div');
  // '../../assets/img/Artua-Star-Wars-R2D2.256.png'
  icon.innerHTML = '😀';
  icon.style.width = '40px';
  icon.style.height = '40px';
  icon.style.position = 'fixed';
  icon.style.bottom = '20px';
  icon.style.right = '20px';
  icon.style.cursor = 'pointer';
  const composeBody = document.querySelector('.bAK');
  composeBody.appendChild(icon);

  return icon;
}

// Function to handle the icon click event
function onIconClick() {
  if (isComposeBoxVisible()) {
    chrome.runtime.sendMessage({ action: 'open-popup-panel' });
    console.log('Clicked!!');
  }
}

// Create a MutationObserver to watch for changes to the DOM
const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE && node.matches('.bAK')) {
        console.log('Compose box added!');
        // If the added node is the compose box, check if it's visible
        if (isComposeBoxVisible()) {
          onComposeBoxVisible();
        }
      }
    }
  }
});

// Start observing changes to the DOM
observer.observe(document.body, { childList: true, subtree: true });
