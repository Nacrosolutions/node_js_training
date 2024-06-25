const EventEmitter = require('events');

function Pulsar(interval, repeat) {
    var events = new EventEmitter;
    var emits = 0;
    var timer = setInterval(function () {
        events.emit('pulse');
        emits++;
        if (emits === repeat) {
            clearInterval(timer);
        }
    }, interval);
    return events;
}


module.exports=Pulsar;