const fs = require('fs');
const zlib = require('zlib');

const readable = fs.createReadStream('./lorem.txt', {
  encoding: 'utf8',
  highWaterMark: 16 * 1024,
});

const writable = fs.createWriteStream('./loremcopy.txt');

readable.on('data', (c) => writable.write(c));

const writableByPipe = fs.createWriteStream('./copybypipe.txt');
readable.pipe(writableByPipe);

const gzip = zlib.createGzip();
const compressed = fs.createWriteStream('./lorem.txt.gz');
readable.pipe(gzip).pipe(compressed);
