var firstName = "swapnil";
var referenceToName = firstName;

//changing the value f a variable 
//doesn't affect the other one

firstName = "Priyanka";

//variable content copied by refernce

var user = {firstName: "Swapnil", lastName : "Jejurkar"};
var referenceToUser = user;

//changing the value of the object will reflect 
//both the variable
user.firstName = "Priyanka";

function getLastName(){ return "Soem value";}
var referenceTofunction = getLastName;