const fs = require('fs');
const { createGzip } = require('node:zlib');

const readable = fs.createReadStream('./lorem.txt', {
  encoding: 'utf8',
  highWaterMark: 16 * 1024,
});

const writable = fs.createWriteStream('./loremcopy.txt');

readable.on('data', (chunk) => {
  writable.write(chunk);
});

const writableByPipe = fs.createWriteStream('./copybypipe.txt');
readable.pipe(writableByPipe);

const compressed = fs.createWriteStream('./lorem.txt.gz');
const gzip = createGzip();

readable.pipe(gzip).pipe(compressed);
