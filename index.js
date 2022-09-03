var http = require('http');
const fs = require('fs');

//create a server object:
http
  .createServer(function (req, res) {
    // res.write('Hello World!!'); //write a response to the client
    // res.end(); //end the response

    if (req.url === '/') {
      fs.createReadStream('./index.html').pipe(res);
    }

    if (req.url === '/api') {
      res.writeHead(200, {
        'Content-Type': 'application/json',
      });

      res.end(JSON.stringify({ name: 'Lorem' }));
    }
  })
  .listen(4567); //the server object listens on port 8080
