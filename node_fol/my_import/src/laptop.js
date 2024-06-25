export class Laptop {
    constructor(brand, cpu, ram) {
        this.brand = brand;
        this.cpu = cpu;
        this.ram = ram;
    }
 
    sysInfo() {
        console.log(this.brand + " " + this.cpu);
    }
 }