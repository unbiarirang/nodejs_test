//connect.static(serve-static으로 바뀜)을 사용한 간단한 정적 파일 서버 (훨씩 간단)
var connect = require('connect');
var http = require('http');
var serveStatic = require('serve-static');

http.createServer(connect()
.use(serveStatic('./'), {redirect: true})
).listen(8124);