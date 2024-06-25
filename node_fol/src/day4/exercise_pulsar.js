const Events = require('events').EventEmitter;

class Pulsar extends Events.EventEmitter {
    constructor(interval, repeat) {
        super();

        this.emits = 0;

        this.timer = setInterval( () => {
            this.emit('pulse');
            this.emits++;
            if (this.emits === repeat) {
                clearInterval(this.timer);
            }

        }, interval);

    }  // eo ctor
}

const pulsar = new Pulsar(1000, 8); // run every sec,  only 8 times.



pulsar.on('pulse', function () {
    console.log("process.mem: ", process.memoryUsage());
});


