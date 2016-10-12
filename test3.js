var readline = require('readline');

var interface = readline.createInterface(process.stdin, process.stdout, null);

interface.question(">>What is the meaning of life? ", function(answer) {
    console.log("About the meaning of life, you said " + answer);
    interface.setPrompt(">>");
    interface.prompt();
});