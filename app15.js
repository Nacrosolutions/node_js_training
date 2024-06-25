const {called} = new class {
    count = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);
    }
};
called(); 
called(); 
called(); 


const {called, count} = new class {
    count = 0;
    called = () => {
        this.count++;
        console.log(`Called : ${this.count}`);
    }
};
called(); 
called(); 
called(); 

console.log(count);