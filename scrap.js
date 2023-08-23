// import { existsSync, readFileSync, writeFile } from 'fs'; // Node.js File System module

// class WindowData {
//   constructor(windowName) {
//     this.window = windowName;
//     this.urls = [];
//   }

//   addUrl(url) {
//     this.urls.push(url);
//   }
// }

// // Load existing data from JSON file if it exists
// let windows = [];
// if (existsSync('data.json')) {
//   const jsonData = readFileSync('data.json', 'utf-8');
//   windows = JSON.parse(jsonData);
// }

// function addWindowData(windowName, urls) {
//   const existingWindow = windows.find(window => window.window === windowName);

//   if (existingWindow) {
//     urls.forEach(url => existingWindow.urls.push(url));
//     saveDataToFile();
//     console.log(`Added URLs to window "${windowName}"`);
//   } else {
//     const newWindow = new WindowData(windowName);
//     urls.forEach(url => newWindow.addUrl(url));
//     windows.push(newWindow);
//     saveDataToFile();
//     console.log(`Created new window "${windowName}" and added URLs`);
//   }
// }

// function saveDataToFile() {
//   const jsonData = JSON.stringify(windows, null, 2); // Convert instances to JSON with indentation

//   writeFile('data.json', jsonData, (err) => {
//     if (err) {
//       console.error('Error writing JSON file:', err);
//     } else {
//       console.log('JSON data written to data.json');
//     }
//   });
// }

// // Example usage
// addWindowData("crypto", ["exemple.com", "exemple1.com", "exemple2.com"]);
// addWindowData("art", ["exemple.com", "exemple1.com", "exemple2.com"]);

chrome.tabs.query({currentWindow:true}, function(tabs) {
  // console.log("Open tabs in current window:", tabs);
  view = document.getElementById("my-window");
  
  tabs.forEach(function(tab) {
  const window_btn = document.createElement('li');
  const window_link = document.createElement('a');
  
  window_link.href = tab.url;
  window_link.textContent = tab.title || tab.url;
  
  window_btn.appendChild(window_link);
  view.appendChild(window_btn);
  });
});

