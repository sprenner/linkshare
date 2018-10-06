// 2018 Stefan Prenner

//this file does nothing atm

chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.getAllInWindow(null, function(tabs){
        for (var i = 0; i < tabs.length; i++) {
            console.log(tabs[i].id + " " + tabs[i].url);                         
        }
    });  

});

chrome.browserAction.onClicked.addListener(function(tab) {
    alert('icon clicked')
    chrome.tabs.getAllInWindow(null, function(tabs){
        for (var i = 0; i < tabs.length; i++) {
            console.log(tabs[i].id + " " + tabs[i].url);                        
        }
    }); 
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    console.log(request);
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye"});
});