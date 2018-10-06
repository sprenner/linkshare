console.log('loaded');

function open_windows(input) { 
    console.log('open called with input: ' + input);
    var res = input.split("`");
    for (var i = 0; i < res.length; i++) {
        window.open(res[i]);
    }
}