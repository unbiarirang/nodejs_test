//간단한 정적 파일 서버
var http = require('http');
var fs   = require('fs');
var base = './';

http.createServer(function (req, res) {
    pathname = base + req.url;
    console.log(pathname);

    fs.exists(pathname, function (exists) {
        if (!exists) {
            res.writeHead(404);
            res.write('Bad request 404\n');
            res.end();
        } else {
            res.setHeader('Context-Type', 'text/html');
            res.statusCode = 200;

            var file = fs.createReadStream(pathname);
            file.on('open', function() {
                file.pipe(res);
            });
        }
    });
}).listen(8124);

console.log('Server running at 8124\n');