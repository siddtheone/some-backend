const fs = require('fs');

const readable = fs.createReadStream('./lorem.txt', {
  encoding: 'utf8',
  highWaterMark: 16 * 1024,
});

const writable = fs.createWriteStream('./loremcopy.txt');

readable.on('data', (chunk) => {
  console.log(chunk);
  writable.write(chunk);
});

const writableByPipe = fs.createWriteStream('./copybypipe.txt');
readable.pipe(writableByPipe);
