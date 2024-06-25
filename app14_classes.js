class Vacation {
    constructor(destination, length) {
      this.destination = destination
      this.length = length
    }
  
    print() {
      console.log(`${this.destination} will take ${this.length} days.`)
    }
  
  }
  
  // === Inheritance ====================================
  class Expedition extends Vacation {
    constructor(destination, length, gear) {
      super(destination, length)
      this.gear = gear
    }
  
    print() {
      super.print()
      console.log(`bring your ${this.gear.join(" and your ")}`)
    }
  }
  
  const trip = new Expedition(
    "Mt. Kailash",
    15,
    ["sunglasses", "jackets", "camera"]);


    trip.print()