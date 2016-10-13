var fs2 = require('fs');
var filenames2 = fs2.readdirSync('.');
var i;

for(i = 0; i< filenames2.length; i++) {
    console.log(filenames2[i]);
}

console.log('ready 2');
console.log('can process next job 2');

var fs = require('fs');

fs.readdir('.', function (err, filenames) {
    var i;
    for (i=0; i<filenames.length; i++) {
        console.log(filenames[i]);
    }

    console.log('ready');
});

console.log('can process next job');