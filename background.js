function changeLinks() {
	var css = 'a { color: #00c !important; }';
	chrome.tabs.insertCSS(null, {code: css});				
}

chrome.browserAction.onClicked.addListener(changeLinks);
