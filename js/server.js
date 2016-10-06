var http = require('http');
var fs = require('fs');


var server = http.createServer(function (req, res) {

    res.writeHead(200, { 'content-type': 'text/html' });

    fs.createReadStream('PROJETO FACIL COM VR.html').pipe(res);
});


server.listen(3000);

console.log('The world has loaded in http://localhost:3000, go fun yourself! :D ');