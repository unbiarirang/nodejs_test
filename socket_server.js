var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    socket.on('addme', function(name) {
        socket.broadcast.emit('chat', 'SERVER: ' + name + ' 등장');
        socket.name = name;
    });

    socket.on('chat', function(msg) {
        console.log('message from ' + socket.name + ': ' + msg);
        io.emit('chat', socket.name + ': ' + msg);
    });
});

http.listen(3000, function() {
    console.log('listening on 3000');
});