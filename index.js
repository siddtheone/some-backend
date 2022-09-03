var http = require('http');
const fs = require('fs');

//create a server object:
http
  .createServer(function (req, res) {
    // res.write('Hello World!!'); //write a response to the client
    // res.end(); //end the response

    res.writeHead(200, {
      'Content-Type': 'text/html',
    });

    const html = fs.readFileSync('./index.html');
    res.end(html.toString().replace('#'));
  })
  .listen(4567); //the server object listens on port 8080
