//async waterfall
var async = require('async');

var fs = require('fs');
var src = './main.txt';
var des = './output.txt';

async.waterfall([
    function (callback) {
        fs.readFile(src, callback);
    },
    function (data, callback) {
        fs.writeFile(des, data, callback);
    }
],
function(err) {
    if (err) console.log(err);
});