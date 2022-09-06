// var http = require('http');
// const fs = require('fs');

// //create a server object:
// http
//   .createServer(function (req, res) {
//     // res.write('Hello World!!'); //write a response to the client
//     // res.end(); //end the response

//     if (req.url === '/') {
//       fs.createReadStream('./index.html').pipe(res);
//     } else if (req.url === '/api') {
//       res.writeHead(200, {
//         'Content-Type': 'application/json',
//       });

//       res.end(JSON.stringify({ name: 'Lorem' }));
//     } else {
//       res.writeHead(404);
//       res.end();
//     }
//   })
//   .listen(4567); //the server object listens on port 8080

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.get('/api', (req, res) => {
  res.json({ name: 'John' });
});

app.get('/person/:id', (res, req) => {
  res.json({ person: req.param.id });
});

app.use('/assets', express.static('./public'));

app.use('/', (req, res, next) => {
  console.log('some request');
  next();
});

app.listen(process.env.PORT || 3000);
