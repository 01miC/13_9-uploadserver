var http = require('http');
var colors = require('colors');

var handlers = require('./handlers')

function start() {
    function onRequest(request, response) {
        console.log("odebrano zapytanie");
        response.writeHead(200, {"Content-Type": "text/plain; charser=utf-8"});
        switch (request.url) {
            case "/" :
            case "/start": 
                handlers.welcome(request,response);
                break;
            case "/upload":
                handlers.upload(request, response);
                break;
            case "/show":
                handlers.show(request, response);
                break;
            default:
                handlers.error(require, response);
        }
    }
    http.createServer(onRequest).listen(9000);
    console.log('Uruchomiono server'.inverse);
}


exports.start = start;