//readline
var readline = require('readline');

var interface = readline.createInterface(process.stdin, process.stdout, null);

interface.question(">>What is the meaning of life? ", function(answer) {
    console.log("About the meaning of life, you said " + answer);
    interface.setPrompt(">>");
    interface.prompt();
});

function closeInterface() {
    console.log('Leaving interface...');
    process.exit();
}

interface.on('line', function(cmd) {
    if(cmd.trim() == '.leave') {
        closeInterface();
        return;
    }
    else
        console.log("repeating command: " + cmd);

    interface.prompt();
});

interface.on('close', function() {
    closeInterface();
});