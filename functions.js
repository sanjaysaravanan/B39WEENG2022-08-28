// Function Keyword function --> Heavy Weighted
// function getExponential(num, expVal) {
//   console.log(num ** expVal);
// }

// // // 2^3 ---> 8
// // getExponential(2, 3);


// // Function expression
// var getExponential = function (num, expVal) {
//   console.log(num ** expVal);
// };
// // // 2^3 ---> 8
// // getExponential(2, 3);


// // Arrow Function --> Light weighted 
// var getExponential = (num, expVal) => {
//   console.log(num ** expVal);
// }
// getExponential(2, 3);


function Bike(name, company, price) {
  this.name = name;
  this.company = company;
  this.price = price;
  this.cc = '120';
  this.stop = () => {
    console.log(`${this.name} has applied brake and stopped`);
  }
  console.log(name, company, price);
}

// var r15Bike = Bike("R15", "Yamaha", 100000); // invoking/calling a function definition
// console.log(r15Bike);


var rx100 = new Bike("Rx100", "Yamaha", 100000); // new keyword construction/instantiation
console.log(rx100);
// console.log(rx100.bikeName, rx100.company);


var Mobile = (name, company, price) => {
  console.log(name, company, price);
  return name;
}

var result = Mobile('G4', 'Moto', '15000');
console.log(result);


var iPhone = new Mobile('13Pro', 'Apple', '150000');
console.log(iPhone);


