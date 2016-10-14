//최종 콜백 기능의 기반 구조
var obj = function() {};

obj.prototype.doSomething = function(arg1, arg2_) {
    var arg2 = (typeof(arg2_) === 'string' ? arg2_ : null);

    var callback_ = arguments[arguments.length - 1];
    callback = (typeof(callback_) === 'function' ? callback_ : null);

    if(!arg2)
        return callback(new Error('second argument missing or not a string'));

    if(!callback)
        return console.log('the last argument is not a function');

    callback(arg1);
}


var test = new obj();

try {
    test.doSomething('test', '3.55', function(err, value) {
        if(err) throw err;

        console.log(value);
    });
} catch(err) {
    console.log(err);
}