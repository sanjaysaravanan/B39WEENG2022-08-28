// ES5 --> function keyword was used for everything (create obj, normal function ...)
// ES6 --> class --> Specifically made only for construction

// Blueprint to create an object (here it is Bike)
class Bike {
  constructor(name, company, price) {
    this.name = name;
    this.company = company;
    this.price = price;
  }
  // Property
  stop = function () {
    console.log(`${this.name} has applied brake and stopped`);
  }

  // Prototype
  accelerate() {
    console.log(`${this.name} has applied throttle and increased its speed`)
  }
}

Bike.prototype.doRacing = () => {
  console.log(`${this.name} is racing`);
}

const r15 = new Bike('R15', 'Yamaha', '100000'); // construction / instantiation
console.log(r15);


const rx100 = new Bike('Rx100', 'Yamaha', '50000');
console.log(rx100);


// Blueprint to create an object (here it is Mobile)
class Mobile {
  constructor(name, company, price) {
    this.name = name;
    this.company = company;
    this.price = price;
  }
  // Property
  playMusic = function (songName) {
    console.log(`${this.name} is playing ${songName}`);
  }

  // Prototype
  takeSelfie() {
    console.log(`${this.name} has turned on flash and took selfie`);
  }
}

const MotoG4 = new Mobile('G4', 'Moto', '1500');
console.log(MotoG4)