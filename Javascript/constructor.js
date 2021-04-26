/*function car() {
  this.numberOfDoors = 5;
  this.brand = "Toyota";
}*/

//function used to build ("consruct") an object
function car(numberOfDoors, brand) {
    this.numberOfDoors = numberOfDoors;
    this.brand = brand;
  }

  //object creation using th new operator on the function call
var newCar = new car(5,"totoya");

var literalCar = {
    numberOfDoors : 4,
    brand : "Honda"
};

//function used to build ("consruct") an object
function car(numberOfDoors, brand) {
    this.numberOfDoors = numberOfDoors;
    this.brand = brand;
  }
  
var luxuryCar = new car(6, "RR");