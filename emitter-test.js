const Emitter = require('./emitter');

const emtr = new Emitter();

emtr.on('greet', () => console.log('First responder to greet'));
emtr.on('greet', () => console.log('I will greet later'));

emtr.emit('greet');
