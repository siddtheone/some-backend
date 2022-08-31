// var buffer = new Buffer('Hello', 'utf8');
// console.log(buffer);
// console.log(buffer.toString());
// console.log(buffer.toJSON());
// console.log(buffer[2]);

// buffer.write('wo');
// console.log(buffer.toString());

const arrBuffer = new ArrayBuffer(8);
const view = new Int32Array(arrBuffer);
view[0] = 5;
view[1] = 10;
view[2] = 100; // this will not get added

console.log(view);
