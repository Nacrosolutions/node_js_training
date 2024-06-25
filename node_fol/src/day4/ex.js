const events = require("events");
const emitter = new events.EventEmitter();
const Pulsar = function (sec, freq) {


  while (freq > 0) {
    setTimeout(() => {
      emitter.emit("pulse");
    }, sec);
    freq--;
  }
};


const pulsar = new Pulsar(1000, 8);


emitter.on("pulse", () => {
  console.log("PUSLAR EMITTED");
});
