document.addEventListener('DOMContentLoaded', documentEvents  , false);

function refresh() {   
    chrome.tabs.query({currentWindow: true}, function(tabs){
        res = "";
        tabs.forEach(function(tab) {
            console.log(tab.id + " " + tab.url);
            res += String(tab.url) + "`";
        });
        
        //for (var i = 0; i < tabs.length; i++) {
        //    console.log(tabs[i].id + " " + tabs[i].url);
        //    res += String(tabs[i].url) + "`";
        //}
        res = res.slice(0, -1);
        console.log(res);
        document.getElementById('getlink_textbox').value = res;
        document.getElementById('getlink_textbox').select();
        document.getElementById('tooltip').innerHTML = 'Copied to Clipboard!';
        copy('getlink_textbox');
    });  
}

function open(input) { 
    var res = input.value.split("`");
    for (var i = 0; i < res.length; i++) {
        chrome.tabs.create({ url: res[i] });
    }
    document.getElementById('tooltip').innerHTML = '';
    document.getElementById('getlink_textbox').value = "Refresh please";
}

function copy(id) {
    document.getElementById(id).select();
    document.execCommand('copy');
}

function documentEvents() {    
  document.getElementById('rf_btn').addEventListener('click', 
    function() { refresh();
  });
  document.getElementById('open_btn').addEventListener('click', 
    function() { open(document.getElementById('open_textbox'));
  });
  // you can add listeners for other objects ( like other buttons ) here 
}

