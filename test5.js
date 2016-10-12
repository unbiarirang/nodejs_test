/*EventEmitter로부터 상속받는 이벤트 기반 개체 생성*/

var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

function inputChecker (name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt',
        {
            'flags' : 'a',
            'encoding' : 'utf8',
            'mode' : 0666});
};

util.inherits(inputChecker, eventEmitter);

inputChecker.prototype.check = function check(input) {
    var command = input.toString().trim().substr(0,3);
    if(command == "wr:") {
        this.emit('write', input.substr(3, input.length));
    } else if (command == "en:") {
        this.emit('end');
    } else {
        this.emit('eco', input);
    }
};

