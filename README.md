# MacOS fullscreen minimized window issue
Opening new minimized window in MacOS on full-screen mode causes the minimized
window to be opened in the foreground and stealing the focus.

<details>
 <summary>Demo</summary>

https://github.com/Manvel/minimize-full-screen-bug-chrome/assets/716969/49dda5ff-e30c-45a1-90eb-743fb710093b

</details>


## Reproduction steps
1. Install current extension into the Chrome browser on MacOS.
2. Open window with running extension in full screen mode(Command + Control + F).
3. Click on the extension icon.
4. Observe.


### Observed behavior
The minimized window is opened in the foreground, stealing the focus and makes
the UI unusable(as there is no exit full-screen button anymore).

### Expected behavior
The minimized window should be opened in the background and not steal the focus.

## Additional information
### Tested on
- Chrome version: 113.0.5672.92 (Official Build) (x86_64)
- MacOS version: Ventura 13.3.1

### Minimized window creation code
```js
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
```
