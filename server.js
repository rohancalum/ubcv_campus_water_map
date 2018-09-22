var http = require('http');  
var fs = require('fs');

http.createServer(function(req, res) {  
    fs.readFile('index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');