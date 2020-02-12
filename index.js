var nw = require('nw');
var debug = true;
nw.Window.open('index.html', {}, function(win) {
    if (debug == true){
        win.showDevTools();
    }
});

