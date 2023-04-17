const events = require('events');
const eventEmitter = new events.EventEmitter();

const date = require("./myModule");

const printDate = () => {
  console.log('DATE = ' + date.getDate());
}

eventEmitter.on('date', printDate);

eventEmitter.emit('date');