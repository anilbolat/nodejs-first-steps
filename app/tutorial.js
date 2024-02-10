const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
const eventName = 'tutorial';

eventEmitter.on(eventName, (num1, num2)=>{
    console.log(eventName + ' event has occurred.');
    console.log(num1 + num2);
});

eventEmitter.emit(eventName, 1, 3)