// background.js
chrome.action.onClicked.addListener(() => {
  chrome.windows.create(
    {
        url: "https://www.google.com/",
        focused: false,
        state: "minimized"
    }
  )
});
