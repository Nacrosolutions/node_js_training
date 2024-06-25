    
    const events = require("events");
    const emitter = new events.EventEmitter();
    
    //emitter.setMaxListeners(1);  // 10
    
    emitter.on("evt1", function ev1() {
        console.log("\n 1. event handler invoked.");
    });
    
    emitter.on("evt1", function() {
        console.log(" 2. Another event handler invoked.");
    });
    
    emitter.on("evt1", function() {
        console.log(" 3. Yet Another event handler invoked.");
    });
    
    
    emitter.removeListener("evt1", ev1());
    
    
    emitter.emit("evt1");
